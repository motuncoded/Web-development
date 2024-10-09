const mongoose = require("mongoose");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Helo node nodemon app");
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
