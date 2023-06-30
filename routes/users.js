const express = require('express');

const router = express.Router();
const userControllers = require('../controllers/user');

router.get('/money/:id', userControllers.getUserMoney);
router.get('/bitcoins/:id', userControllers.getUserBitcoins);
router.patch('/updateMoneyCount/:id', userControllers.changeCountMoney);
router.patch('/updateBitcoinsCount/:id', userControllers.changeCountBitcoins);

module.exports = router;
