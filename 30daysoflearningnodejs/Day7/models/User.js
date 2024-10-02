// models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // Add more fields as needed
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", UserSchema);
