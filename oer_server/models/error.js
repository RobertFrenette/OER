var mongoose = require('mongoose');
 
var ErrorSchema = new mongoose.Schema({
    user_id: {type: String, required: true },
    book_id: {type: String, required: true },
    type:    {type: String, required: true },
    page:    {type: String, required: true },
    desc:    {type: String, required: true }
});
 
module.exports = mongoose.model('Error', ErrorSchema);
