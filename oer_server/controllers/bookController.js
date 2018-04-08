var log         = require('log-util');
var bookService = require('../services/bookService');
 
var BookController = {};

BookController.create = (req, res) => {
    bookService.create({
        title: req.body.title,
        isbn: req.body.isbn
    })
    .then((b) => {
        res.json({"_id": b._id});
    })
    .catch((err) => {
        log.error(`Creating Book error: ${err}`);
        res.status(403).end(JSON.stringify({"Error: ": "Creating Book error."}));
    });
};

BookController.list = (req, res) => {
    bookService.list({})
    .then((books) => {
        res.json(books);
    })
    .catch((err) => {
        log.error(`Listing Books error: ${err}`);
        res.status(403).end(JSON.stringify({"Error: ": "Listing Books error."}));
    });
};

BookController.find = (req, res) => {
    bookService.find({_id: req.params.book_id})
    .then((book) => {
        res.json(book);
    })
    .catch((err) => {
        log.error(`Reading Book error: ${err}`);
        res.status(403).end(JSON.stringify({"Error: ": "Reading Book error."}));
    });
};

module.exports = BookController;
