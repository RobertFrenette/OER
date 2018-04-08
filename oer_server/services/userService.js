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

UserService.reset = (userObj) => {
    var query = { username: userObj.username, email: userObj.email };

    return User.findOneAndUpdate(query,
        // the change to be made
        {password: userObj.password},
    
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

module.exports = UserService;