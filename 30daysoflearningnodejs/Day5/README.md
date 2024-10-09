# 📅 Day 5: Data Persistence in Node.js (JSON or Database)

On Day 5, we'll focus on persisting data, which means making sure data is saved even after the server is restarted. We’ll start by learning how to store and retrieve data in JSON files and, optionally, move on to using a database like MongoDB for more robust solutions.

## Option 1: Storing Data in JSON Files

This is the simplest approach. We will write user and product data to a JSON file, and read from that file whenever the server starts or needs to access the data.

### Step 1: Install File System Module

Node.js has a built-in fs module for interacting with the file system. We'll use it to read and write JSON files.

```javascript
const fs = require("fs");
```

### Step 2: Create Helper Functions to Handle Files

You can write two functions to handle reading from and writing to a JSON file.
readFromFile: Reads data from a JSON file.
writeToFile: Writes data to a JSON file.

```javascript
const fs = require("fs");
const path = "./data.json"; // Path to your JSON file

// Function to read data from the JSON file
function readFromFile() {
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path, "utf8");
    return JSON.parse(data);
  }
  return { users: [], products: [] }; // Default if no file exists
}

// Function to write data to the JSON file+
function writeToFile(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2), "utf8");
}
```

### Step 3: Modify Server to Use the File for Data Storage

You can now update your server code to use the readFromFile and writeToFile functions. Instead of storing users and products in memory, we’ll persist them to a file.

```javascript
const http = require("http");
const fs = require("fs");
const path = "./data.json";

// Helper functions
function readFromFile() {
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path, "utf8");
    return JSON.parse(data);
  }
  return { users: [], products: [] };
}

function writeToFile(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2), "utf8");
}

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  // Read data from file
  let { users, products } = readFromFile();

  if (url.startsWith("/users")) {
    if (method === "GET") {
      // Respond with users from file
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(users));
    } else if (method === "POST") {
      // Add a new user
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        writeToFile({ users, products });
        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "User added", users }));
      });
    } else if (method === "PUT") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const updatedUser = JSON.parse(body);
        const index = users.findIndex((user) => user.id === updatedUser.id);
        if (index !== -1) {
          users[index] = updatedUser;
          writeToFile({ users, products });
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
      const id = Number(url.split("/").pop());
      users = users.filter((user) => user.id !== id);
      writeToFile({ users, products });
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "User deleted", users }));
    }
  } else if (url.startsWith("/products")) {
    // Same logic for products
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

### Step 4: Explanation

JSON File Storage:
Now, users and products are written to a JSON file (data.json), so the data persists even after the server restarts.
Read/Write Functions:
We use readFromFile to load the data from the file when the server starts and writeToFile to save the data when changes are made.

## Option 2: Using MongoDB (Database)

If you're ready to move beyond file storage, you can integrate MongoDB, a NoSQL database, with your Node.js application. Here’s a simple guide on how to do this:

### Step 1: Install MongoDB Driver and Set Up a MongoDB Instance

Install MongoDB locally or use a cloud-based service like MongoDB Atlas.
Install the MongoDB driver for Node.js:

```bash
npm install mongodb
```

### Step 2: Create a MongoDB Connection

```javascript
const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017"; // Replace with your MongoDB URI
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function connectDB() {
  await client.connect();
  const db = client.db("nodeapp"); // Your database name
  const usersCollection = db.collection("users");
  const productsCollection = db.collection("products");
  return { usersCollection, productsCollection };
}
```

### Step 3: Update Server to Use MongoDB

You will need to use MongoDB to handle database operations instead of reading/writing to a file.

Here’s an example of how you can insert a new user:

```javascript
const http = require("http");
const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function connectDB() {
  await client.connect();
  const db = client.db("nodeapp");
  const usersCollection = db.collection("users");
  return usersCollection;
}

const server = http.createServer(async (req, res) => {
  const method = req.method;
  const url = req.url;

  const usersCollection = await connectDB();

  if (url.startsWith("/users")) {
    if (method === "GET") {
      // Fetch all users
      const users = await usersCollection.find().toArray();
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(users));
    } else if (method === "POST") {
      // Add a new user
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", async () => {
        const newUser = JSON.parse(body);
        await usersCollection.insertOne(newUser);
        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "User added" }));
      });
    }
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```
