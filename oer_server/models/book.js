var mongoose = require('mongoose');
 
var BookSchema = new mongoose.Schema({
    title: {type: String, required: true },
    isbn:  {type: String, required: true, index: { unique: true } }
});
 
module.exports = mongoose.model('Book', BookSchema);
