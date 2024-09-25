const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`
      <h1>Submit Your Data</h1>
      <form method="POST" action="/submitting">
        <label>Name: <input type="text" name="name" value="name" /></label><br>
        <label>Email: <input type="email" name="email" value="email" /></label><br>
        <button type="submit">Submit</button>
      </form>
    `);
  } else if (req.method === "POST" && req.url === "/submitting") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      // Parse the form-encoded data
      const parsedData = querystring.parse(body);
      const name = parsedData.name;
      const email = parsedData.email;

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({ message: `Hello, ${name}! Your email is ${email}.` }),
      );
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Not existing" }));
  }
});

const port = 3001;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
