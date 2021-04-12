//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var FoodItemSchema = new Schema({
  name: { type: String, required: true },
  sugarAmount: { type: Number, required: true}
});

module.exports = mongoose.model('FoodItem', FoodItemSchema );
/*
var FoodItems = mongoose.model('FoodItem', FoodItemSchema);

function foodCreate(name, sugarAmount, cb) {
  foodDetail = {name:name, sugarAmount:sugarAmount};
  var food = new FoodItem(foodDetail);

  food.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Food: ' + food);
    foods.push(food)
    cb(null, food)
  }  );
}

FoodItems.findOne({}, function(err, doc) {
    if(!doc){
        buildFoodItems();
    }
});
*/
