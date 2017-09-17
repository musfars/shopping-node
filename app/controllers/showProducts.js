const ProductList = require('../services/showProducts')

module.exports = function (req,res){
  const min_price = (req.query.min_price) ?req.query.min_price :0;
  const max_price = (req.query.max_price) ?req.query.max_price :100000;
  const limit_value = (req.query.limit) ?req.query.limit :null;

  console.log("MIN ->",min_price);
  console.log("MAX ->",max_price);
  ProductList((err,products) => {
    console.log("GET CONTROLLER");
    if(err){
      res.send('error');
    }
    var result = {
      status:200,
      total: products.length,
      result: products
    }
    res.json(result);  
  },min_price,max_price,limit_value);
}