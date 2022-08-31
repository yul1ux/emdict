const express = require('express');
const { getDef } = require('../controllers/');

const router = express.Router();

router.get('/search', getDef);

module.exports = router;
