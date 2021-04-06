//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var HouseSchema = new Schema({
   name: {type: String, required: true }
});

//Export model
module.exports = mongoose.model('House', HouseSchema);
