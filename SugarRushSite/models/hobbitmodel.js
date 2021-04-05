var mongoose = require('mongoose')
var assert = require('assert')

var Schema = mongoose.Schema;

var HobbitSchema = Schema({
   name: {type: String, required: true },
   sugarTolerance: { type: Number, min: 0, required: true },
   house: { type: Schema.Types.ObjectId, ref: 'House', required: true }//,
   //preferredFood: [{type: Schema.Type.ObjectId, ref: 'FoodItem' }]
});

//Export model
module.exports = mongoose.model('Hobbit', HobbitSchema);

/*
// following part from https://stackoverflow.com/questions/30696946/how-to-import-json-into-mongodb-using-mongoose
var Hobbit = mongoose.model('Hobbit', HobbitSchema);

data = [
  { 'name': 'Quinzor Autumndance', 'sugarTolerance': 30.0, 'house': 0, 'preferredFood': [] },
  { 'name': 'Milo Greenbottle', 'sugarTolerance': 80.0, 'house': 1, 'preferredFood': [] },
  { 'name': 'Cora Tealeaf', 'sugarTolerance': 79.0, 'house': 2, 'preferredFood': [] }
]

Hobbit.collection.insertMany(data, function(err,r) {
    assert.equal(null, err);
    assert.equal(3, r.insertedCount);
    db.close();
})
*/
