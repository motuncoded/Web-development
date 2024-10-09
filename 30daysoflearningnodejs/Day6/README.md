# 📅 Day 6: Build a RESTful API with Express.js

On Day 6, you'll dive into building a more advanced RESTful API using Express.js, one of the most popular web frameworks for Node.js. Express simplifies the process of setting up routes, handling requests, and interacting with data, making your development experience much smoother.

## 🎯 Goals for Day 6

- Learn how to set up Express.js.
- Build RESTful routes for users and products.
- Implement CRUD operations (Create, Read, Update, Delete) using a cleaner API structure.
- Handle middleware and error handling.

---

### 🛠 Step 1: Install Express.js

To start, you need to install Express in your project:

```bash
npm install express
```

### 🛠 Step 2: Set Up a Basic Express Server

Let’s create a basic Express.js server that listens for incoming requests.

```javascript
const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

Now, if you run your server with node index.js, it will be running on http://localhost:3000.

### 🛠 Step 3: Create Routes for Users and Products

We'll create routes to handle users and products, with full CRUD operations using RESTful methods.

```javascript
const express = require("express");
const app = express();
const port = 3000;

// In-memory data for users and products
let users = [];
let products = [];

// Middleware to parse JSON bodies
app.use(express.json());

/** --- USERS ROUTES --- */

// Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Add a new user
app.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({ message: "User added", users });
});

// Update a user
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  const index = users.findIndex((user) => user.id === parseInt(id));
  if (index !== -1) {
    users[index] = updatedUser;
    res.status(200).json({ message: "User updated", users });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Delete a user
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== parseInt(id));
  res.status(200).json({ message: "User deleted", users });
});

/** --- PRODUCTS ROUTES --- */

// Get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Add a new product
app.post("/products", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json({ message: "Product added", products });
});

// Update a product
app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  const index = products.findIndex((product) => product.id === parseInt(id));
  if (index !== -1) {
    products[index] = updatedProduct;
    res.status(200).json({ message: "Product updated", products });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Delete a product
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  products = products.filter((product) => product.id !== parseInt(id));
  res.status(200).json({ message: "Product deleted", products });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

### Step 4: Explanation

CRUD Routes:

- GET requests return all users or products.
- POST requests add a new user or product.
- PUT requests update an existing user or product by ID.
- DELETE requests remove a user or product by ID.
- Express Router: We used routes to handle different HTTP methods (GET, POST, PUT, DELETE).
- JSON Middleware: The app.use(express.json()) middleware allows Express to automatically parse incoming JSON requests.

### 🛠 Step 5: Middleware for Error Handling

We can introduce middleware to handle errors and route not found scenarios gracefully.

```javascript
// Middleware for handling 404 errors
app.use((req, res, next) => {
  res.status(404).json({ message: "Resource not found" });
});

// Middleware for handling other errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});
```

### 🛠 Step 6: Testing Your API

You can use Postman or cURL to test the RESTful API.

Get all users:

```bash
curl -X GET http://localhost:3000/users
```

Add a new user:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"id":1,"name":"John Doe"}' http://localhost:3000/users
```

Update a user:

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"id":1,"name":"John Updated"}' http://localhost:3000/users/1
```

Delete a user:

```bash
curl -X DELETE http://localhost:3000/users/1
```

### 🛠 Step 7: Improving Code Structure (Optional)

As your API grows, it's important to organize your code into separate files:

- Routes: Create separate route files for users and products.
- Controllers: Move business logic to controller files.
- Models: Add data models if you're using a database.
  Example folder structure:

```bash
/project
│
├── /routes
│   ├── users.js
│   └── products.js
├── /controllers
│   ├── userController.js
│   └── productController.js
├── index.js
```

You can split the routes like this:

```javascript
// routes/users.js
const express = require("express");
const router = express.Router();

let users = [];

router.get("/", (req, res) => res.json(users));
router.post("/", (req, res) => {
  users.push(req.body);
  res.status(201).json({ message: "User added" });
});
// Other routes...
```

module.exports = router;
In index.js:

```javascript
const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");

app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```
