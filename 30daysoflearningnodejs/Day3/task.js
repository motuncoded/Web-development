// Create a new file basicServer.js.
// Set up a server with the http module.
// Handle multiple routes (/, /about, /contact) and return different HTML content for each route.
// Handle invalid routes with a 404 error message.
//handle the http methods

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Welcome to the Home Page</h1>");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Welcome to the About Page</h1>");
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Welcome to the Contact Page</h1>");
  } else if (req.url === "/services") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Welcome to the Services Page</h1>");
  } else if (req.url === "/portfolio") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Welcome to the Portfolio Page</h1>");
  } else if (req.url === "/api") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Hello JSON" }));
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>404 error message</h1>");
  }
});
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
