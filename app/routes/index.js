const showProducts = require('../controllers/showProducts')
const addToCart = require('../controllers/addToCart')

module.exports = function(app){
  app.get('/productListing',showProducts);
  app.post('/add_to_cart',addToCart);
};