var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var houseSchema = Schema({
   name: {type: String, required: yes },
   resident: {type: Scheme.Type.ObjectId, ref: 'Hobbit', required: true }
});

var House = mongoose.model('House', houseSchema);
