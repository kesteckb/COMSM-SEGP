var mongoose = require('mongoose');

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, options);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var FoodItem = require('./models/fooditemmodel')
var House = require('./models/housemodel')
var Hobbit = require('./models/hobbitmodel')
var Meal = require('./models/mealmodel')

FoodItem.deleteMany({}, function(err) {
    console.log('collection removed')
});
House.deleteMany({}, function(err) {
    console.log('collection removed')
});
Hobbit.deleteMany({}, function(err) {
    console.log('collection removed')
});
Meal.deleteMany({}, function(err) {
    console.log('collection removed')
});


/*
db.db.dropCollection('fooditems');
db.db.dropCollection('hobbits');
db.db.dropCollection('houses');
db.db.dropCollection('meals');
*/
