var express = require('express');
var router = express.Router();

/* GET signup page */
router.get('/', function(req, res, next) {
  res.render('signup.jade', { title: 'Sign Up' });
});

module.exports = router;
