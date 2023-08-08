const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

//outer.post('/products/delete/:id', shopController.postDelete);

const Product = require('../models/product');

router.delete('/products/delete/:id', (req, res) => {
  const productId = req.params.id;

  Product.deleteById(productId)
    .then(result => {
      console.log('Product deleted successfully');
      res.sendStatus(204); // No content
    })
    .catch(error => {
      console.log('Error deleting product:', error);
      res.sendStatus(500);
    });
});


module.exports = router;
