const express = require('express');

const router = express.Router();
const userControllers = require('../controllers/user');
const { tokenDecoder } = require('../helpers/tokenDecoder');

router.get('/money/:id', tokenDecoder, userControllers.getUserMoney);
router.get('/bitcoins/:id', tokenDecoder, userControllers.getUserBitcoins);
router.patch('/updateMoneyCount/:id', tokenDecoder, userControllers.changeCountMoney);
router.patch('/updateBitcoinsCount/:id', tokenDecoder, userControllers.changeCountBitcoins);

module.exports = router;
