#! /usr/bin/env node

var async = require('async')
var FoodItem = require('./models/fooditemmodel')
var House = require('./models/housemodel')
var Hobbit = require('./models/hobbitmodel')
var Meal = require('./models/mealmodel')

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

var foods = []
var houses = []
var hobbits = []
var meals = []

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

function houseCreate(name, cb) {
  houseDetail = {name:name};
  var house = new House(houseDetail);

  house.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New House: ' + house);
    houses.push(house)
    cb(null, house)
  }  );
}

function hobbitCreate(name, sugarTolerance, house, cb) {
  hobbitDetail = {name:name, sugarTolerance:sugarTolerance, house:house};
  var hobbit = new Hobbit(hobbitDetail);

  hobbit.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Hobbit: ' + hobbit);
    hobbits.push(hobbit)
    cb(null, hobbit)
  }  );
}

function mealCreate(name, foodChoices, cb) {
  mealDetail = {name:name, foodChoices:foodChoices};
  var meal = new Meal(mealDetail);

  meal.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Meal: ' + meal);
    meals.push(meal)
    cb(null, meal)
  }  );
}

function createFoods(cb) {
    async.parallel([
        function(callback) {
            foodCreate('Banana', 12.0, callback);
        },
        function(callback) {
            foodCreate('Apple', 10.0, callback);
        },
        function(callback) {
            foodCreate('Protein Shake', 23.0, callback);
        },
        function(callback) {
            foodCreate('Bagel', 6.0, callback);
        },
        function(callback) {
            foodCreate('Croissant', 11.0, callback);
        },
        function(callback) {
            foodCreate('Butter Cookie', 20.0, callback);
        },
        function(callback) {
            foodCreate('Orange Juice', 8.0, callback);
        },
        function(callback) {
            foodCreate('Peanut Butter', 9.0, callback);
        },
        function(callback) {
            foodCreate('Hummus', 0.3, callback);
        },
        function(callback) {
            foodCreate('Pizza', 3.6, callback);
        },
        function(callback) {
            foodCreate('White Bread', 5.0, callback);
        },
        function(callback) {
            foodCreate('Wholewheat Bread', 6.0, callback);
        },
        function(callback) {
            foodCreate('Milk Chocolate', 52.0, callback);
        },
        function(callback) {
            foodCreate('Oats Porridge', 0.0, callback);
        },
        function(callback) {
            foodCreate('Jam', 49.0, callback);
        },
        function(callback) {
            foodCreate('Chicken', 0.0, callback);
        },
        function(callback) {
            foodCreate('Salmon', 0.0, callback);
        },
        function(callback) {
            foodCreate('Egg', 1.1, callback);
        },
        function(callback) {
            foodCreate('Crisps', 0.2, callback);
        },
        function(callback) {
            foodCreate('Granola Bars', 29.0, callback);
        },
        function(callback) {
            foodCreate('Decaffinated cola', 11.0, callback);
        }
        ],
        cb);
}

function createHouses(cb) {
    async.parallel([
        function(callback) {
            houseCreate('House 1', callback);
        },
        function(callback) {
            houseCreate('House 2', callback);
        },
        function(callback) {
            houseCreate('House 3', callback);
        }
        ],
        cb);
}

function createHobbits(cb) {
    async.parallel([
        function(callback) {
            hobbitCreate('Quinzor Autumndance', 30.0, houses[0], callback);
        },
        function(callback) {
          hobbitCreate('Milo Greenbottle', 80.0, houses[1], callback);
        },
        function(callback) {
          hobbitCreate('Cora Tealeaf', 60.0, houses[2], callback);
        },
        ],
        cb);
}

function createMeals(cb) {
    async.parallel([
        function(callback) {
            mealCreate('Breakfast', [foods[0], foods[1], foods[2]]);
        },
        function(callback) {
            mealCreate('Second Breakfast', [foods[3], foods[4], foods[5]]);
        },
        function(callback) {
            mealCreate('Elevenses', [foods[6], foods[7], foods[8]]);
        },
        function(callback) {
            mealCreate('Luncheon', [foods[9], foods[10], foods[11]]);
        },
        function(callback) {
            mealCreate('Afternoon Tea', [foods[12], foods[13], foods[14]]);
        },
        function(callback) {
            mealCreate('Dinner', [foods[15], foods[16], foods[17]]);
        },
        function(callback) {
            mealCreate('Supper', [foods[18], foods[19], foods[20]]);
        }
        ],
        cb);
}

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

async.series([
    createFoods,
    createHouses,
    createHobbits,
    createMeals
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+ err);
    }
    else {
        console.log('Hobbits: '+ hobbits);
        console.log('FoodItems:' + fooditems);
        console.log('Houses:' + houses);
        console.log('Meals: ' + meals);
    }
});
