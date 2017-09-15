var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shopSchema = new Schema({
  "productId": String,
  "name": String,
  "price": Number,
  "quantity": Number  
},{versionKey:false});

const CartList = module.exports = mongoose.model('Model1',shopSchema,'CartList');