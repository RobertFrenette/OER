var mongoose = require('mongoose');
 
var ErrorSchema = new mongoose.Schema({
    user_id: String,
    book_id: String,
    type: String,
    page: String,
    desc: String
});
 
module.exports = mongoose.model('Error', ErrorSchema);
