const express = require('express')
const {getDef} = require('../controllers/index.js')

const router = express.Router();

router.get('/search', getDef);

module.exports = router;