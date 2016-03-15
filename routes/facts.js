var express = require('express');
var router = express.Router();

/* GET facts page */
router.get('/', function(req, res, next) {
    res.render('facts.jade', {
        title: 'Fun Facts',
        page: 'facts',
        img_src: '../images/wireframe-person.jpg'
    });
});

module.exports = router;
