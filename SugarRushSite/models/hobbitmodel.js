var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hobbitSchema = Schema({
   name: {type: String, required: true },
   sugarTolerance: { type: Number, min: 0, required: true },
   house: { type: Schema.Types.ObjectId, ref: 'House', required: true },
   preferredFood: [{type: Schema.Type.ObjectId, ref: 'FoodItem' }]
});

var Hobbit = mongoose.model('Hobbit', hobbitSchema);
