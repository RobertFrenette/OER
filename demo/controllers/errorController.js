// In thei context, "Error" is the actual error found in the book
// it is NOT a Mongo DB Error (err)

var log         = require('log-util');
var errorService = require('../services/errorService');
 
var ErrorController = {};

ErrorController.create = (req, res) => {
    errorService.create({
        user_id: req.body.user_id,
        book_id: req.body.book_id,
        type: req.body.type,
        page: req.body.page,
        desc: req.body.desc
    })
    .then((e) => {
        res.json(e);
    })
    .catch((err) => {
        log.error(`Creating Error error: ${err}`);
        res.end('Creating Error error.');
    });
};

ErrorController.list = (req, res) => {
    errorService.list({})
    .then((errors) => {
        if (errors) {
            res.json(errors);
        } else {
            res.end('No Errors found.');
        }
    })
    .catch((err) => {
        log.error(`Listing Errors error: ${err}`);
        res.end('Listing Errors error.');
    });
};

ErrorController.find = (req, res) => {
    errorService.find({_id: req.params.error_id})
    .then((error) => {
        res.json(error);
    })
    .catch((err) => {
        log.error(`Reading Error error: ${err}`);
        res.end('Reading Error error.');
    });
};

module.exports = ErrorController;
