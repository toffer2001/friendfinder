// DEPENDENCIES
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

// CONFIG EXPRESS
var app = express();
var PORT = process.env.PORT || 3000;

// HANDLE FILE TYPES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// ROUTING
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// LISTENER
app.listen(PORT, function () {
    console.log(
        'App listening on PORT: ' +
        PORT);
});