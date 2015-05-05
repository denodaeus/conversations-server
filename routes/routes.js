'use strict';
var express = require('express'),
    app = express(),
    router = express.Router(),
    Users = require('../lib/users');

var notImplemented = function(res) {
  res.status(200).send({reason: 'Not Implemented'});
};

exports = module.exports = function(app) {
  // Users
  router.get('/users', function(req, res) { Users.getUsers(req, res); });
  router.post('/users', function(req, res) { Users.createUser(req, res); });

  router.get('/users/:id', function(req, res) { notImplemented(res); });
  router.patch('/users/:id', function(req, res) { notImplemented(res); });
  router.delete('/users/:id', function(req, res) { notImplemented(res); });

  // Accounts
  router.get('/users/:id/accounts', function(req, res) { notImplemented(res); });
  router.post('/users/:id/accounts', function(req, res) { notImplemented(res); });

  router.get('/users/:id/accounts/:accountId', function(req, res) { notImplemented(res); });
  router.patch('/users/:id/accounts/:accountId', function(req, res) { notImplemented(res); });
  router.delete('/users/:id/accounts/:accountId', function(req, res) { notImplemented(res); });

  // QuickSend Cards
  router.get('/users/:id/quicksendcards', function(req, res) { notImplemented(res); });
  router.post('/users/:id/quicksendcards', function(req, res) { notImplemented(res); });
  
  router.get('/users/:id/quicksendcards/:qscid', function(req, res) { notImplemented(res); });
  router.post('/users/:id/quicksendcards/:qscid', function(req, res) { notImplemented(res); });
  router.delete('/users/:id/quicksendcards/:qscid', function(req, res) { notImplemented(res); });

  // Contacts
  router.get('/users/:id/contacts', function(req, res) { notImplemented(res); });
  router.post('/users/:id/contacts', function(req, res) { notImplemented(res); });

  router.get('/users/:id/contacts/:contactId', function(req, res) { notImplemented(res); });
  router.patch('/users/:id/contacts/:contactId', function(req, res) { notImplemented(res); });
  router.delete('/users/:id/contacts/:contactId', function(req, res) { notImplemented(res); });

  return router;
};
