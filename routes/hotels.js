var express = require('express');
var router = express.Router();

const hotels_controlers = require('../controllers/hotels');

/* GET costumes */

router.get('/', hotels_controlers.hotels_view_all_Page);

module.exports = router;
/* GET detail costume page */
router.get('/detail', hotels_controlers.hotels_view_one_Page);
/* GET create costume page */
router.get('/create', hotels_controlers.hotels_create_Page);
/* GET create update page */
router.get('/update', hotels_controlers.hotels_update_Page);
/* GET delete costume page */
router.get('/delete', hotels_controlers.hotels_delete_Page);

