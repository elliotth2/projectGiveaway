var express = require('express');
var router = express.Router();
var entries = require('../models/submissions.js');
var angular= require('vendor/angular.min.js');
router.post('/submissions', function(req, res){
  var entry= req.body;
   entries.create(entry, function(){
      if(err) {
        return res.status(500).json({err:err.message});
      }
      res.json({'entry': entry, 'message': 'data created'});
    });
  });
this. saveEntries = function(entry){
  var data = [];
    entry.forEach(function()) {
        var request;
      if(!entry._id) {
        request= $http.post('/models/submission.js')
      };
      queue.push(request);
    });
    $q.all(queue).then(function(results){
      console.log("saved to database");
    });
  }''

});
