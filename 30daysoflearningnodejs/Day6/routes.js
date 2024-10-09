//  to create routes

const express = require("express");
const app = express();
const port = 3001;

// In-memory data for users and products
let users = [];

// Middleware to parse JSON bodies
app.use(express.json());

// Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

//to add user

app.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({ message: "User added", users });
});

// to add multiple users
app.post("/users", (req, res) => {
  const newUsers = req.body; // Expect an array of user objects
  newUsers.forEach((user) => {
    user.id = users.length + 1; // Generate a new ID for each user
    users.push(user);
  });
  res.status(201).json({ message: "Users added", users });
});

//to update a product
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
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
