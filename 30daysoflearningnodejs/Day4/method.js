const http = require("http");

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  if (url === "/data") {
    if (method === "GET") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "GET request received" }));
    } else if (method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        res.statusCode = 201;
        res.setHeader("Content-Type", "appliaction/json");
        res.end(
          JSON.stringify({ message: "POST request received", data: body }),
        );
      });
    } else if (method === "PUT") {
      // Handle PUT request
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(
          JSON.stringify({
            message: "PUT request received",
            updatedData: body,
          }),
        );
      });
    } else if (method === "DELETE") {
      // Handle DELETE request
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "DELETE request received" }));
    } else {
      // Handle unsupported methods
      res.statusCode = 405;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: `${method} not allowed` }));
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not Found");
  }
});
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
