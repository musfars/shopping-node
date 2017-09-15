const CartList = require('../models/CartList')

module.exports.addToCart = (e,callback) => {
  CartList.create(e,callback);
}