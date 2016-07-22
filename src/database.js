"use strict";
var mongoose= require('mongoose');

mongoose.connect('mongod://localhost/submissions', function(err) {
  if(err){
    console.log('failed connecting to Mongodb');
  }else{
    console.log('sucessfully connected to Mongo!');
  }
});
