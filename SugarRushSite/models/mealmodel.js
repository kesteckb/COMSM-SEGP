//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var MealSchema = new Schema({
  name: { type: String, required: true },
  possibleFoods: [{ type: Schema.Types.ObjectId, ref: 'FoodItem' }]
});

module.exports = mongoose.model('FoodItem', FoodItemSchema );