var _ = require('lodash');
var User = require('./user');
var logger = require('../../utils/logger');

/* TODO: Replace with ORM */
var users;

function Users() {
  logger.debug('initializing users');
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

Users.prototype.getAll = function(callback) {
  logger.debug({ method: 'getAll', users: this.users.length || 0 });
  return callback(null, this.users);
};

Users.prototype.getById = function(id) {
  return _.find(users, { 'id': id });
};

Users.prototype.getByName = function(name) {
  return _.find(users, { 'fullName': name });
};

module.exports = Users;
