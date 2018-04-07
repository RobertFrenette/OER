var log         = require('log-util');
var bookService = require('../services/bookService');
 
var BookController = {};

BookController.create = (req, res) => {
    bookService.create({
        title: req.body.title,
        isbn: req.body.isbn
    })
    .then((b) => {
        res.json(b);
    })
    .catch((err) => {
        log.error(`Creating Book error: ${err}`);
        res.end('Creating Book error.');
    });
};

BookController.find = (req, res) => {
    bookService.find({_id: req.body._id})
    .then((book) => {
        res.json(book);
    })
    .catch((err) => {
        log.error(`Reading Book error: ${err}`);
        res.end('Reading Book error.');
    });
};

module.exports = BookController;