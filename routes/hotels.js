var express = require('express');
var router = express.Router();

const hotels_controlers = require('../controllers/hotels');

/* GET costumes */

router.get('/', hotels_controlers.hotels_view_all_Page);
router.get('/hotels/:id', hotels_controlers.hotels_detail);

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

module.exports = router;
/* GET detail costume page */
router.get('/detail',secured, hotels_controlers.hotels_view_one_Page);
/* GET create costume page */
router.get('/create',secured, hotels_controlers.hotels_create_Page);
/* GET create update page */
router.get('/update',secured, hotels_controlers.hotels_update_Page);
/* GET delete costume page */
router.get('/delete',secured, hotels_controlers.hotels_delete_Page);

