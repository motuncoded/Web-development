// index.js
const express = require("express");
const connectDB = require("./db"); // Import the database connection
const User = require("./models/User"); // Import User model

const app = express();
const port = 3002;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

/** --- USERS ROUTES --- */

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new user
app.post("/users", async (req, res) => {
  const { name, email } = req.body;

  // Basic validation
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  try {
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json({ message: "User added", user: newUser });
  } catch (err) {
    if (err.code === 11000) {
      // Duplicate key error
      res.status(400).json({ message: "Email already exists" });
    } else {
      res.status(500).json({ message: err.message });
    }
  }
});

// Update a user
app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (name) user.name = name;
    if (email) user.email = email;

    await user.save();
    res.json({ message: "User updated", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a user
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// Middleware for handling 404 errors
app.use((req, res, next) => {
    res.status(404).json({ message: 'Resource not found' });
});

// Middleware for handling other errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
