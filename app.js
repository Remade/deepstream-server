// var
var express = require('express');
var app = express();

//Routes
var authentication = require('./routes/authentication.js');
var broadcast = require('./routes/broadcast.js');

app.use('/authentication', authentication);
app.use('/broadcast', broadcast);

app.listen(8888);
console.log('Application Started');