# 📅 Day 3: Building Your First HTTP Server in Node.js

Welcome to **Day 3** of your Node.js learning journey! Today, you will learn how to create an HTTP server from scratch using Node.js' built-in **`http`** module. You'll also explore how to handle **requests** and **responses** in a Node.js application.

---

## 📚 **What is an HTTP Server?**

An HTTP server is a software application that listens for HTTP requests from clients (like browsers) and sends back HTTP responses. These responses can contain HTML, JSON, or other types of data.

In a typical web application:
1. A client sends an **HTTP request** to the server (e.g., a browser accessing a webpage).
2. The server processes the request and sends back an **HTTP response** with the requested data (e.g., HTML, JSON, etc.).

Node.js can easily create a simple HTTP server with its **`http`** core module.

---

## 🛠 **Creating Your First HTTP Server**

### Step 1: Import the `http` Module

To create an HTTP server, you first need to import the `http` module:

```javascript
const http = require('http');
```
### Step 2: Create a server

```javascript
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, Node.js!');
})
```
### Step 3: Listen to the server
```javascript
const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
```
### Step 4: Run the server
```bash
node app.js
```
---

## 🌐 **Handling Requests and Responses**
### An HTTP server in Node.js has access to two main objects:
-req (request): Contains information about the incoming request (e.g., URL, HTTP method, headers).
-res (response): Used to send back a response to the client.
```javascript 
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to the Home Page');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is the About Page');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page Not Found');
    }
});
```
---

## 🚀 **Learning Resources for Day 3**

- [Node.js HTTP Module Documentation](https://nodejs.org/api/http.html)
- [How to Create a Web Server in Node.js - DigitalOcean Guide](https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module/)
- [Understanding HTTP Methods (GET, POST, etc.)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)



