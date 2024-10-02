// db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Replace the URI string with your MongoDB connection string.
    const uri = "mongodb://localhost:27017/";

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
