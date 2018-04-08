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

ErrorService.list = (searchParams) => {
    return Error.find(searchParams)
        .then((errors) => {
            return errors;
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

ErrorService.update = (errorObj) => {
    var query = { _id: errorObj._id, user_id: errorObj.user_id, book_id: errorObj.book_id };

    return Error.findOneAndUpdate(query,
        // the change to be made
        {
            type: errorObj.type,
            page: errorObj.page,
            desc: errorObj.desc
        },
    
        // an option that asks mongoose to return the updated version of the doc
        {new: true},
    
        // the callback function
        (err, user) => {
          if (err) {
            throw err;
          } else {
            return user;
          }
        }
      );
};

module.exports = ErrorService;