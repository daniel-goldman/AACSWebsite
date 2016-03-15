var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
    { title: 'All About Computers',
      page: 'index',
      img_src: '../images/global-business%20copy.jpg'
    });
});

module.exports = router;
