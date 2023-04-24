const mongoose = require("mongoose")
const hotelsSchema = mongoose.Schema({
// hotels_location: String,
// hotels_numrooms: Number,
// hotels_rating: Number

//New code for Assignment13
hotels_location: {
    type: String,
    required: true
},
hotels_numrooms: {
    type: Number,
    required: true,
    min:0,
    max:100
},
hotels_rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10
}
});

module.exports = mongoose.model("hotels",
hotelsSchema)