var express = require('express');
var router = express.Router();

/* GET facts page */
router.get('/', function(req, res, next) {
  res.render('admin.jade', { title: 'Admin Page' });
});

module.exports = router;
