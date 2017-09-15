const ProductList = require('../models/ProductList')

module.exports = showProducts = (callback,min_price,max_price,limit_value) => {
  // let criteria = {
  // price : (min_price) ?{$gte:parseInt(min_price) }:{}+','+(max_price) ?{$gte:parseInt(max_price)}:{}
  // };
  // console.log("Criteria",criteria);
  console.log("min==>",min_price);
  console.log("max==>",max_price);
  ProductList.find(
    {price:
      {
        $gte:parseInt(min_price),
        $lte:parseInt(max_price)
      }
    },
    {_id:0},
    callback).limit(parseInt(limit_value));
}
