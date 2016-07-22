"use strict";
var mongoose= require('mongoose');

mongoose.connect('mongod://localhose/submissions', function(err) {
  if(err){
    console.log('faield connecting to Mongodb');
  }else{
    console.log('sucessfully connected to Mongo!');
  }
});
