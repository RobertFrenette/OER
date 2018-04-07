var log         = require('log-util');
var userService = require('../services/userService');
 
var UserController = {};

UserController.register = (req, res) => {
    userService.register({
        username: req.body.username,
        password: req.body.password
    })
    .then((u) => {
        res.json(u);
    })
    .catch((err) => {
        log.error(`Creating User error: ${err}`);
        res.end('Creating User error.');
    });
};

UserController.login = (req, res) => {
    userService.login({
        username: req.body.username,
        password: req.body.password
    })
    .then((user) => {
        res.json(user);
    })
    .catch((err) => {
        log.error(`Reading User error: ${err}`);
        res.end('Reading User error.');
    });
};

module.exports = UserController;
