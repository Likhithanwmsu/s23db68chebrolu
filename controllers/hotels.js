var hotels = require('../models/hotels');
// List of all Costumes
exports.hotels_list = function(req, res) {
 res.send('NOT IMPLEMENTED: hotels list');
};
// for a specific Costume.
exports.hotels_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: hotels detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.hotels_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: hotels create POST');
};
// Handle Costume delete form on DELETE.
exports.hotels_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: hotels delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.hotels_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: hotels update PUT' + req.params.id);
};
// List of all Costumes
exports.hotels_list = async function(req, res) {
    try{
    thehotels = await hotels.find();
    res.send(thehotels);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.hotels_view_all_Page = async function(req, res) {
    try{
    thehotels = await hotels.find();
    res.render('hotels', { title: 'hotels Search Results', results: thehotels });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };