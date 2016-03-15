var express = require('express');
var router = express.Router();

/* GET signup page */
router.get('/', function(req, res, next) {
    res.render('signup.jade', {
        title: 'Sign Up',
        page: 'signup',
        img_src: '../images/global-business.jpg'
    });
});

module.exports = router;
