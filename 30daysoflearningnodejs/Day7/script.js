const mongoose = require("mongoose");
const express = require("express");
const Product = require("./models/Product");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Helo node nodemon app");
});
app.get("/api/products", async (req, res) => {
  try {
    const findProduct = await Product.find(req.body);
    res.status(200).json(findProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.post("/api/products", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running in 3000 ");
});

mongoose
  .connect(
    "mongodb+srv://motunrayoadeneye:kjtcz7tzlN2UFqGg@store.z63lh.mongodb.net/Nodejs_Storage?retryWrites=true&w=majority&appName=Store",
  )
  .then(() => {
    console.log("Connected to mongodb!");
  })
  .catch(() => {
    console.log("Connection failed");
  });
