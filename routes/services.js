var express = require('express');
var router = express.Router();

/* GET services page */
router.get('/', function(req, res, next) {
    res.render('services.jade', {
      title: 'Services',
      page: 'services',
      img_src: '../images/keyboard-longview.jpg'
    });
});

module.exports = router;
