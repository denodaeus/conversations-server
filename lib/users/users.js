var _ = require('lodash');
var User = require('./user');
var logger = require('../../utils/logger');

/* TODO: Replace with ORM */
var users;

function Users() {
  this.users = [];
};

Users.prototype.create = function(params, callback) {
  logger.debug({method: 'create', params: params, message: 'creating user' });
  var user = new User({
    fullName: params.fullName,
    defaultPhoneNumber: params.defaultPhoneNumber,
    active: params.active
  });
  this.users.push(user);
  callback(null, user);
};

Users.prototype.findAll = function(callback) {
  logger.debug({ method: 'findAll', users: this.users.length || 0 });
  return callback(null, this.users);
};

Users.prototype.findById = function(id, callback) {
  logger.debug({ method: 'findById', id: id, message: 'finding user by id' });
  var user = _.find(this.users, { 'id': id });
  if (_.isEmpty(user)) {
    return callback(new Error('Not Found'), null);
  }
  return callback(null, user);
};

Users.prototype.findByName = function(name) {
  return _.find(users, { 'fullName': name });
};

module.exports = Users;
