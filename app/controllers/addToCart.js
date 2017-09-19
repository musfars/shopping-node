const CartList = require('../services/addToCart')

module.exports = function(req,res){
  console.log("BODY----->",req.body);
  var a = {
    productId:req.body.item.productId,
    name:req.body.item.name,
    price:req.body.item.price,
    quantity:req.body.item.quantity
  };
  if(typeof a.productId == 'undefined' || typeof a.name == 'undefined' || typeof a.price == 'undefined' || typeof a.quantity == 'undefined'){
      res.json({
        status:422,
        error: 'Parameter not present'
      })
      return;
    }


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