// In this context, "Error" is the actual error found in the book
// it is NOT a Mongo DB Error (err)

var log          = require('log-util');
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
        res.json({"_id": e._id});
    })
    .catch((err) => {
        log.error(`Creating Error error: ${err}`);
        res.status(403).end(JSON.stringify({"Error: ": "Creating Error error."}));
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
        res.status(403).end(JSON.stringify({"Error: ": "Listing Errors error."}));
    });
};

ErrorController.find = (req, res) => {
    errorService.find({_id: req.params.error_id})
    .then((error) => {
        res.json(error);
    })
    .catch((err) => {
        log.error(`Reading Error error: ${err}`);
        res.status(403).end(JSON.stringify({"Error: ": "Finding Error error."}));
    });
};

ErrorController.update = (req, res) => {
    errorService.update({
        _id:   req.body.error_id,
        user_id: req.body.user_id,
        book_id: req.body.book_id,
        type: req.body.type,
        page: req.body.page,
        desc: req.body.desc
    })
    .then((e) => {
        if (e !== null) {
            res.json({"_id": e._id});
        } else {
            log.error(`Error Update Unsucessful for Book _id: ${req.body.book_id} -- Error Not found`);
            res.status(403).end(JSON.stringify({"Error: ": "Error Update error."}));
        }
    })
    .catch((err) => {
        log.error(`Error Update error: ${err}`);
        res.status(403).end(JSON.stringify({"Error: ": "Error Update error."}));
    });
};

ErrorController.findUserErrors = (req, res) => {
    errorService.list({user_id: req.params.user_id})
    .then((errors) => {
        if (errors) {
            res.json(errors);
        } else {
            res.end('No Errors found.');
        }
    })
    .catch((err) => {
        log.error(`Finding User Errors error: ${err}`);
        res.status(403).end(JSON.stringify({"Error: ": "Finding User Errors error."}));
    });
};

module.exports = ErrorController;
