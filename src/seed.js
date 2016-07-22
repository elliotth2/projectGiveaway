'use strict';

var Submission = require('./models/submissions,js');

var entries= [
  'nammm',
  'hah@aol.com',
  '234234234',
  'address asdfasdf df, sdfsdwxc',
  'true'
];

entries.forEach(function(Submission, index){
  Submission.find({'name': entries}, function(err, entries){
    if(!err && !entries.length){
      Submission.create({name: hannah,
      email: hannahhotmail.com,
      phone: 8593266666,
      address: 'asdf fsdfs', 
      newsletter: true})
    };
  });
});
