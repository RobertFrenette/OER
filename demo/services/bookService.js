var Book = require('../models/Book');

var BookService = {};

BookService.create = (bookObj) => {
    var book = new Book(bookObj);

    return book.save()
        .then((b) => {
            return b;
        })
        .catch((err) => {
            throw err;
        });
};

BookService.list = (searchParams) => {
    return Book.find(searchParams)
        .then((books) => {
            return books;
        })
        .catch((err) => {
            throw err;
        });
};

BookService.find = (bookObj) => {
    return Book.findOne({_id: bookObj._id})
        .then((book) => {
            return book;
        })
        .catch((err) => {
            throw err;
        });
};

module.exports = BookService;