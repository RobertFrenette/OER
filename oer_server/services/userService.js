var User = require('../models/User');

var UserService = {};

UserService.register = (userObj) => {
    var user = new User(userObj);

    return user.save()
        .then((u) => {
            return u;
        })
        .catch((err) => {
            throw err;
        });
};

UserService.login = (userObj) => {
    return User.findOne({username: userObj.username, password: userObj.password})
        .then((user) => {
            return user;
        })
        .catch((err) => {
            throw err;
        });
};

module.exports = UserService;