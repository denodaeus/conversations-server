var Users = new (require('./users'));
var logger = require('../../utils/logger');
var inspect = require('util').inspect;

var validateUser = function(user, callback) {
  if(!user) {
    return callback(new Error('Missing property: body'));
  } else if(!user.fullName) {
    return callback(new Error('Missing property: fullName'));
  } else if (!user.defaultPhoneNumber) {
    return callback(new Error('Missing property: defaultPhoneNumber'));
  } else {
    return callback(null, user);
  }
};

var createUser = function(req, res) {
  logger.debug({ method: 'createUser', message: 'creating a user'});
  var body = req.body || {};
  validateUser(body, function(err, user) {
    if (err) {
      var reason = {
        reason: 'Bad Request',
        err: err.message,
        message: 'Request missing one or more properties',
        body: body
      };
      logger.debug(reason);
      res.status(400).send(reason);
    } else {
      body.active = false;
      Users.create(body, function(err, user) {
        if(err) res.status(500).send(err);
        logger.debug({ method: 'createUser', user: user, message: 'Created user' });
        res.status(200).send(user);
      });    
    }
  });
};
exports.createUser = createUser;

var getUsers = function(req, res) {
  Users.findAll(function(err, users) {
    if (err) res.status(500).send(err);
    logger.debug({ method: 'getAll', count: users.length, message: 'getting all users' });
    res.send(users);
  });
};
exports.getUsers = getUsers;

var getUser = function(req, res) {
  if (req.params.id) {
    Users.findById(req.params.id, function(err, user) {
      if (err && err.message !== 'Not Found') {
        res.status(500).send(err);
      } else if (!user) {
        res.status(404).send({reason: 'Not Found', code: 404});
      } else {
        res.send(user);
      }
    });
  } else if (req.params.name) {
    // do something here
  } else {
    res.status(400).send({reason: 'Not Implemented', code: 400});
  }
};
exports.getUser = getUser;
