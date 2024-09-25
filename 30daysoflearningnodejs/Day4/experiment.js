const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Handle GET requests
  if (req.method === "GET" && req.url === "/") {
    // Serve an HTML form for GET requests
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`
            <h1>Submit Your Data</h1>
            <form method="POST" action="/submit">
                <label>Name: <input type="text" name="name" /></label><br>
                <label>Email: <input type="email" name="email" /></label><br>
                <button type="submit">Submit</button>
            </form>
        `);
  }
  // Handle POST requests
  else if (req.method === "POST" && req.url === "/submit-json") {
    let body = "";

    // Collect the data chunks
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // When all the data is collected
    req.on("end", () => {
      // Parse the form data (it's in query string format)
      const parsedData = new URLSearchParams(body);
      const name = parsedData.get("name");
      const email = parsedData.get("email");

      // Send a response back with the submitted data
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(`
                <h1>Form Submitted</h1>
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
            `);
    });
  }
  // Handle 404 for any other routes
  else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>404 Not Found</h1>");
  }
});

// Server listens on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
