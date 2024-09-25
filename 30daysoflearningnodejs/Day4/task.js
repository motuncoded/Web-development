const http = require("http");

// In-memory data stores
let users = ['motunrayo'];

let products = [];

// Helper function to parse JSON body
function parseBody(req, callback) {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    callback(JSON.parse(body));
  });
}

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  // Handle /users route
  if (url.startsWith("/users")) {
    if (method === "GET") {
      // Respond with list of users
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(users));
    } else if (method === "POST") {
      // Add a new user
      parseBody(req, (data) => {
        users.push(data);
        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "User added", users }));
      });
    } else if (method === "PUT") {
      // Update a user (assuming user ID in the request body)
      parseBody(req, (data) => {
        const index = users.findIndex((user) => user.id === data.id);
        if (index !== -1) {
          users[index] = data;
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ message: "User updated", users }));
        } else {
          res.statusCode = 404;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ message: "User not found" }));
        }
      });
    } else if (method === "DELETE") {
      // Delete a user (assuming user ID in the query string)
      const id = Number(url.split("/").pop());
      users = users.filter((user) => user.id !== id);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "User deleted", users }));
    } else {
      res.statusCode = 405;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: `${method} not allowed` }));
    }
  }

  // Handle /products route
  else if (url.startsWith("/products")) {
    if (method === "GET") {
      // Respond with list of products
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(products));
    } else if (method === "POST") {
      // Add a new product
      parseBody(req, (data) => {
        products.push(data);
        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Product added", products }));
      });
    } else if (method === "PUT") {
      // Update a product (assuming product ID in the request body)
      parseBody(req, (data) => {
        const index = products.findIndex((product) => product.id === data.id);
        if (index !== -1) {
          products[index] = data;
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ message: "Product updated", products }));
        } else {
          res.statusCode = 404;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ message: "Product not found" }));
        }
      });
    } else if (method === "DELETE") {
      // Delete a product (assuming product ID in the query string)
      const id = Number(url.split("/").pop());
      products = products.filter((product) => product.id !== id);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "Product deleted", products }));
    } else {
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
