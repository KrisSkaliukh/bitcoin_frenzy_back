const express = require('express');

const router = express.Router();
const bitcoinPriceController = require('../controllers/bitcoins');
const { tokenDecoder } = require('../helpers/tokenDecoder');

router.get('/:id', tokenDecoder, bitcoinPriceController.getBitcoinPrice);
router.patch('/updatePrice', bitcoinPriceController.changeBitcoinPrice);

module.exports = router;
