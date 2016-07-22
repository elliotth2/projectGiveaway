'use strict';

var mongoose= require('mongoose');

var schema = new mongose.Schema({
  name: String,
  email: String,
  phone: Number,
  address: String,
  newsletter: Boolean,
});

var model = mongoose.model('Submission', schema);

module.exports= model; 
