var express = require('express');
var router = express.Router();
var entries = require('../models/submissions.js');

router.post('/submissions', function(req, res){
  var entry= req.body;
  entries.create(entry, function(){})
if(err) {
  return res.status(500).json({err:err.message});
}
  res.json({'entry; entry, message: 'data created'});
  })
});
