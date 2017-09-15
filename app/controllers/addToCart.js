const CartList = require('../services/addToCart')

module.exports = function(req,res){
  var a = {
    productId:req.body.productId,
    name:req.body.name,
    price:req.body.price,
    quantity:req.body.quantity
  };
  CartList.addToCart(a,(err,cartProducts) => {
    if(err){
      res.send(err);
    }
    var result = {
      status:200,
      total: 1,
      result: cartProducts
    }
    res.json(result); 
  });
}