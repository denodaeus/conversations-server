'use strict';

var express = require('express'),
    router = express.Router(),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    config = require('config'),
    expressListRoutes = require('express-list-routes'),
    app = express(),
    logger = require('./utils/logger');

// settings
var port = config.get('Application.port');
app.set('port', port);

// Configure Express
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(session({secret: 'goodpassword', saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(require('morgan')('combined', {'stream': logger.stream }));

// Routes
var router = require('./routes/routes')(app);
app.use('/api/v2', router);

// List Routes for Debugging Purposes
expressListRoutes({ prefix: '/api/v2' }, 'API:', router);

app.listen(port, 'localhost', function() {
  console.log('Conversations server listening on port %d', port);
});
