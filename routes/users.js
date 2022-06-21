const express = require('express');

const router = express.Router();
const userControllers = require('../controllers/user');

router.get('/', userControllers.getUser);

module.exports = router;
