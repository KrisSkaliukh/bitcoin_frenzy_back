const express = require('express');

const router = express.Router();
const userControllers = require('../controllers/user');

router.get('/money/:id', userControllers.getUserMoney);
router.get('/bitcoins/:id', userControllers.getUserBitcoins);

module.exports = router;
