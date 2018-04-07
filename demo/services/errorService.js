var Error = require('../models/Error');

var ErrorService = {};

ErrorService.create = (errorObj) => {
    var error = new Error(errorObj);

    return error.save()
        .then((e) => {
            return e;
        })
        .catch((err) => {
            throw err;
        });
};

ErrorService.find = (error) => {
    return Error.findOne({_id: error._id})
        .then((error) => {
            return error;
        })
        .catch((err) => {
            throw err;
        });
};

module.exports = ErrorService;