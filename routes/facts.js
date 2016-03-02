var express = require('express');
var router = express.Router();

/* GET facts page */
router.get('/', function(req, res, next) {
  res.render('facts.jade', { title: 'Did you know?' });
});

module.exports = router;
