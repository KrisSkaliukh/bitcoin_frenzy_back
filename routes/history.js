const express = require('express');

const router = express.Router();
const historyController = require('../controllers/history');

router.post('/', historyController.addHistory);
router.get('/userHist/:id', historyController.getHistory);

module.exports = router;
