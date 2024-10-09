# 📅 Day 4: Understanding and Using HTTP Methods in Node.js

Welcome to **Day 4!** Today, you'll dive deeper into how **HTTP methods** work in Node.js and how to handle each one using Node.js' built-in http module. You will extend the basic server you built earlier to handle **GET**, **POST**, **PUT**, and **DELETE** requests.

## **What Are HTTP Methods?**

HTTP methods are the actions that can be performed on resources on the server. Here’s a breakdown of the most commonly used HTTP methods:

**GET**: Used to fetch data from the server. This method does not modify data, only retrieves it.
**POST**: Used to send data to the server, typically used for creating a new resource.
**PUT**: Used to update an existing resource or create a new one if it doesn't exist.
**DELETE**: Used to delete a resource from the server.

## 🛠 **Setting Up the Server to Handle HTTP Methods**

We’ll create a Node.js server that can respond to GET, POST, PUT, and DELETE requests.

Understanding HTTP Methods
GET: The default method, typically used for fetching data from the server.
POST: Used for sending data to the server, such as submitting form data.

Step 1: Basic Server Structure
Here’s how to build a basic server that listens for different HTTP methods.

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  if (url === "/data") {
    if (method === "GET") {
      // Handle GET request
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "GET request received" }));
    } else if (method === "POST") {
      // Handle POST request
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json");
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
```

### Step 2: Explanation of the Code

- GET Request: If a client sends a GET request to /data, the server will return a JSON response with a message.
- POST Request: When the server receives a POST request, it listens for the data (because POST requests send data in the request body), processes the data, and returns a confirmation along with the received data.
- PUT Request: The server handles PUT requests in a similar way to POST, but PUT is generally used to update existing data.
- DELETE Request: For DELETE requests, the server simply responds that the resource has been deleted (no actual data is processed in this simple example).
