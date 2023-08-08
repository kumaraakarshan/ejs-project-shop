const path = require('path');

const express = require('express');

const contactController = require('../controllers/contact');

const router = express.Router();

router.get('/admin/contact', contactController.getcontact);
router.get('/admin/success', contactController.postcontact);

module.exports = router;
