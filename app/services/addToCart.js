const CartList = require('../models/CartList');
const ProductList = require('../models/ProductList')


module.exports.addToCart = (e,callback) => {
  ProductList.update(
    {productId: e.productId},
    {$inc:{quantity: (-1)}},function(err,data){
      console.log("result======>",data);

    }
  )
  CartList.findOneAndUpdate(
    {productId: e.productId},
    {$inc: {quantity: e.quantity}},
    {new: true},
    function(err,data){
      if(data){
        callback(err,data);
      }
      else{
        CartList.create(e,callback);
      } 
    }
  );  
};
