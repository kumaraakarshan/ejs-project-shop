const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();


//const contactController=require('../controller/contact')
//const contactSuccessController=require('../controller/success')

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

//router.get('/contact',contactController.getcontact);
//router.get('/success',contactSuccessController.success );
//router.post('/contact', contactController.postcontact);

module.exports = router;
