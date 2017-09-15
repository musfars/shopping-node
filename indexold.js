var mongoose = require('mongoose');
const bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.urlencoded());
ProductList = require('./cart');
CartList = require('./cart');

mongoose.connect('mongodb://localhost/ShoppingCart');
// var db = mongoose.connection;

app.get('/productListing',(req,res) => {
  ProductList.showProducts((err,products) => {
    if(err){
      res.send('error');
    }
    var result = {
      status:200,
      total: products.length,
      result: products
    }
    res.json(result);  
  });
});

app.post('/add',(req,res) => {
  var a = {
    productId:req.body.productId,
    name:req.body.name,
    price:req.body.price,
    quantity:req.body.quantity
  };
  ProductList.addProducts(a,(err,products) => {
    if(err){
      res.send('error');
    }
    res.json(products);  
  });
});

app.post('/add_to_cart',(req,res) => {
  var a = {
    productId:req.body.productId,
    name:req.body.name,
    price:req.body.price,
    quantity:req.body.quantity
  };
  CartList.addToCart(a,(err,cartProducts) => {
    if(err){
      res.send('error');
    }
    var result = {
      status:200,
      total: cartProducts.length,
      result: cartProducts
    }
    res.json(result); 
  });
});

app.listen(4000);