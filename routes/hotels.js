var express = require('express');
var router = express.Router();

const hotels_controlers = require('../controllers/hotels');

/* GET costumes */

router.get('/', hotels_controlers.hotels_view_all_Page);

module.exports = router;