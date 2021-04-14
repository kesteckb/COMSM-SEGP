//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var FoodItemSchema = new Schema({
  name: { type: String, required: true },
  sugarAmount: { type: Number, required: true},
  meals: [{type: Number}]
});

module.exports = mongoose.model('FoodItem', FoodItemSchema );
