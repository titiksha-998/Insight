const mongoose = require('mongoose');


const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: String,
  image: String,
  price: String,
  description: String,
});

module.exports = mongoose.model('Product', ProductSchema);
