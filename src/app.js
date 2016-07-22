'use strict';
var express = require('express');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

app.get('/', function(req, res){
  res.render("index");
});

app.listen(3000, function() {
  console.log("The frontend server is running on Port 3000.");
});
