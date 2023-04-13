const mongoose = require("mongoose")
const hotelsSchema = mongoose.Schema({
hotels_location: String,
hotels_numrooms: Number,
hotels_rating: Number
})
module.exports = mongoose.model("hotels",
hotelsSchema)