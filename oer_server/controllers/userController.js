var log         = require('log-util');
var userService = require('../services/userService');
 
var UserController = {};

UserController.register = (req, res) => {
    userService.register({
        username: req.body.username,
        email:    req.body.email,
        password: req.body.password
    })
    .then((u) => {
        res.json({"_id": u._id});
    })
    .catch((err) => {
        log.error(`Creating User error: ${err}`);
        res.status(403).end(JSON.stringify({"Error: ": "Registration error."}));
    });
};

UserController.login = (req, res) => {
    userService.login({
        username: req.body.username,
        password: req.body.password
    })
    .then((user) => {
        res.json({"_id": user._id});
    })
    .catch((err) => {
        log.error(`Reading User error: ${err}`);
        res.status(403).end(JSON.stringify({"Error: ": "Login error."}));
    });
};

module.exports = UserController;
