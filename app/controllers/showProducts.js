const ProductList = require('../services/showProducts')

module.exports = function (req,res){
  const min_price = (req.query.min_price) ?req.query.min_price :null;
  const max_price = (req.query.max_price) ?req.query.max_price :null;
  const limit_value = (req.query.limit) ?req.query.limit :null;
  console.log("MIN ->",min_price);
  console.log("MAX ->",max_price);
  ProductList((err,products) => {
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