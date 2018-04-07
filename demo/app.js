require('dotenv').config();
 
var express    = require('express');
var path       = require('path');
var mongoose   = require('mongoose');
var bodyparser = require('body-parser');
var log        = require('log-util');
var user       = require('./routes/userRouter.js');
var book       = require('./routes/bookRouter.js');
var error      = require('./routes/errorRouter.js');

// Connect to DB
var uri   = `mongodb://${process.env.DB_USER}:${process.env.DB_USER_PWD}@cluster0-shard-00-00-rvadh.mongodb.net:27017,cluster0-shard-00-01-rvadh.mongodb.net:27017,cluster0-shard-00-02-rvadh.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`;
mongoose.connect(uri)
        .then(() => { log.info('DB connection successful!'); })
        .catch((err) => { log.error(`DB connection failed: ${err}`); });
 
var app = express();

var jsonParser = bodyparser.json();

app.use('/user', jsonParser, user);
app.use('/book', jsonParser, book);
app.use('/error', jsonParser, error);
 
app.use((req, res, next) => {
    log.error(`404: ${req.url}`);
    res.status(404).end('Error: 404 - Page Not Found.');
});
 
app.use((req, res, next) => {
    log.error(`500: ${req.url}`);
    res.status(500).end('Error!');
});

module.exports = app;
