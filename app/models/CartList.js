var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shopSchema = new Schema({
  "productId": {
    type:String,
    required:true},
  "name": {
    type:String,
    required:true},
  "price": {
    type:Number,
    required:true},
  "quantity": {
    type:Number,
    required:true}  
},{versionKey:false});

const CartList = module.exports = mongoose.model('Model1',shopSchema,'CartList');