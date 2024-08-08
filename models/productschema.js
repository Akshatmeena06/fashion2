const mongoose = require("mongoose");
const productschema = new mongoose.Schema({
  product_id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  productimg: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  product_qty: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  sub_category: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  colors: {
    type:[String],
    required:true
    

  },
});
const productcollection =mongoose.model("products",productschema)
module.exports = productcollection;