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
