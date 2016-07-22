'use strict';
var express = require('express');
var Submissions = require('../models/submissions.js')
var app = express();
app.use('/', express.static('public'));

require('./database');
require('./seed');

app.listen(3000, function() {
  console.log("The frontend server is running on Port 3000.");
});

router.post
