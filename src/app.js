'use strict';
var express = require('express');
var Submissions = require('./models/submissions.js')
var router= require('./api')
var parser= require('body-parser');
var app = express();

app.use('/', express.static('public'));
app.use(parser.json());
require('./database');
require('./seed');

app.listen(3000, function() {
  console.log("The frontend server is running on Port 3000.");
});

var router = require('./api/index.js');
app.use('/api', router);
