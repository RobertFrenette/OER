var mongoose = require('mongoose');
 
var BookSchema = new mongoose.Schema({
    title: String,
    isbn: String
});
 
module.exports = mongoose.model('Book', BookSchema);
