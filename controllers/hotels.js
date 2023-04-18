var hotels = require('../models/hotels');
// List of all Costumes
exports.hotels_list = function (req, res) {
    res.send('NOT IMPLEMENTED: hotels list');
};
// for a specific Costume.
// exports.hotels_detail = function(req, res) {
//  res.send('NOT IMPLEMENTED: hotels detail: ' + req.params.id);
// };

// for a specific Costume.
exports.hotels_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await hotels.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Costume create on POST.
exports.hotels_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: hotels create POST');
};
// Handle Costume delete form on DELETE.
exports.hotels_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: hotels delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
// exports.hotels_update_put = function(req, res) {
//  res.send('NOT IMPLEMENTED: hotels update PUT' + req.params.id);
// };
//Handle Costume update form on PUT.
exports.hotels_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await hotels.findById(req.params.id)
        // Do updates of properties
        if (req.body.hotels_location)
            toUpdate.hotels_location = req.body.hotels_location;
        if (req.body.hotels_numrooms) toUpdate.hotels_numrooms = req.body.hotels_numrooms;
        if (req.body.hotels_rating) toUpdate.hotels_rating = req.body.hotels_rating;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};
// List of all Costumes
exports.hotels_list = async function (req, res) {
    try {
        thehotels = await hotels.find();
        res.send(thehotels);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.hotels_view_all_Page = async function (req, res) {
    try {
        thehotels = await hotels.find();
        res.render('hotels', { title: 'Search Results hotels', results: thehotels });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Costume create on POST.
exports.hotels_create_post = async function (req, res) {
    console.log(req.body)
    let document = new hotels();
    document.hotels_location = req.body.hotels_location;
    document.hotels_numrooms = req.body.hotels_numrooms;
    document.hotels_rating = req.body.hotels_rating;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Costume delete on DELETE.
exports.hotels_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await hotels.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.hotels_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await hotels.findById(req.query.id)
        res.render('hotelsdetail',
            { title: 'hotels Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.hotels_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('hotelscreate', { title: 'hotels Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a costume.
// query provides the id
exports.hotels_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await hotels.findById(req.query.id)
        res.render('hotelsupdate', { title: 'hotels Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.hotels_delete_Page = async function(req, res) {
console.log("Delete view for id " + req.query.id)
try{
result = await hotels.findById(req.query.id)
res.render('hotelsdelete', { title: 'hotels Delete', toShow:
result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
