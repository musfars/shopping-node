const CartList = require('../services/addToCart')

module.exports = function(req,res){
  var a = {
    productId:req.body.productId,
    name:req.body.name,
    price:req.body.price,
    quantity:req.body.quantity
  };
  if(typeof a.productId == 'undefined' || typeof a.name == 'undefined' || typeof a.price == 'undefined' || typeof a.quantity == 'undefined'){
      res.json({
        status:422,
        error: 'Parameter not present'
      })
      return;
    }
  res.header("Access-Control-Allow-Origin", "*");  
  CartList.addToCart(a,(err,cartProducts) => {
    if(err){
      res.status(400).send({
        status:422,
        error:'Parameters required'
      });
      return;
    }
    var result = {
      status:200,
      total: 1,
      result: cartProducts
    }
    res.json(result); 
  });
}