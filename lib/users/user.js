var uuid = require('node-uuid');

function User(params) {
  params = params || {};
  this.id = params.id || uuid.v4();
  this.fullName = params.fullName;
  this.active = params.active;
  this.defaultPhoneNumber = params.defaultPhoneNumber;
};

module.exports = User;
