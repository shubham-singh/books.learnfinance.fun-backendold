const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const ProductSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  author: String,
  price: Number,
  img: [],
  category: String,
  inStock: Boolean
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;