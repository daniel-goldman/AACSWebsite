var express = require('express');
var router = express.Router();

/* GET about page */
router.get('/', function(req, res, next) {
    res.render('about.jade', {
        title: 'About',
        page: 'about',
        img_src: '../images/global-business%20copy.jpg'
    });
});

module.exports = router;
