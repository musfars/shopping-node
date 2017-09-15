var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shopSchema = new Schema({
  "productId": String,
  "name": String,
  "price": Number,
  "quantity": Number  
},{versionKey:false});

const ProductList = module.exports = mongoose.model('Model',shopSchema,'ProductList');
