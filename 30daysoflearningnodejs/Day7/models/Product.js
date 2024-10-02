const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product Name is required"],
  },
  image: {
    type: String,
    required: false,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },

  price: {
    type: Number,
    required: true,
    default: 0,
  },
},
    { timestamps: true },
  

);
module.exports = mongoose.model("Product", ProductSchema);
