#! /usr/bin/env node

var async = require('async')
var Hobbit = require('./models/hobbitmodel')

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

var hobbits = []

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

function createHobbits(cb) {
  async.parallel([
    function(callback) {
      hobbitCreate('Quinzor Autumndance', 30.0, mongoose.Types.ObjectId(0), callback);
    },
    function(callback) {
      hobbitCreate('Milo Greenbottle', 80.0, mongoose.Types.ObjectId(1), callback);
    },
    function(callback) {
      hobbitCreate('Cora Tealeaf', 79.0, mongoose.Types.ObjectId(2), callback);
    },
    ],
    cb);
}

async.series([
    createHobbits,
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Hobbits: '+ hobbits);

    }
    // All done, disconnect from database
    mongoose.connection.close();
});
