var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shopSchema = new Schema({
  "productId": String,
  "name": String,
  "price": Number,
  "quantity": Number  
},{versionKey:false});

const ProductList = module.exports = mongoose.model('Model',shopSchema,'ProductList');
const CartList = module.exports = mongoose.model('Model',shopSchema,'CartList');

module.exports.showProducts = (callback) => {
  ProductList.find({},{_id:0},callback);
}

module.exports.addProducts = (e,callback) => {
  ProductList.create(e,callback);
}

module.exports.addToCart = (e,callback) => {
  CartList.create(e,callback);
}

module.exports.showCount = (callback) => {
  CartList.count({},callback);
}