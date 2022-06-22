const express = require('express');

const router = express.Router();
const bitcoinPriceController = require('../controllers/bitcoins');

router.get('/', bitcoinPriceController.getBitcoinPrice);

router.patch('/update', bitcoinPriceController.changeBitcoinPrice);

module.exports = router;
