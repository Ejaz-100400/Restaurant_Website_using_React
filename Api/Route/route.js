const express = require('express');
const restaurrantwidgetController =require('./../Controllers/RestaurantWidget.js')
const restaurrantMenuController =require('./../Controllers/RestaurantMenu.js')
const PaymentController =require('./../Controllers/Payment.js')
const router = express.Router();

router.get('/',restaurrantwidgetController.DisplayHomePg)
router.get('/Menu',restaurrantMenuController.DisplayMenuData)
router.post('/filteres',restaurrantMenuController.filterResturants)
router.post('/payment',PaymentController.Payments)
module.exports = router;
