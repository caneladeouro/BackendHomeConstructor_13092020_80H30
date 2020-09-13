const express = require('express');
const router = express.Router();
const appController = require('./Controller/appController');

router.post('/', appController.calculate);

module.exports = router;