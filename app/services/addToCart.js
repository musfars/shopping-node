const CartList = require('../models/CartList')

module.exports.addToCart = (e,callback) => {
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
