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
   // Handle Costume create on POST.
exports.hotels_create_post = async function(req, res) {
    console.log(req.body)
    let document = new hotels();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.hotels_location = req.body.hotels_location;
    document.hotels_numrooms = req.body.hotels_numrooms;
    document.hotels_rating = req.body.hotels_rating;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };