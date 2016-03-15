var express = require('express');
var router = express.Router();
var database = require('./dbLayer');

var db = new database();

/* GET questions page */
router.get('/', function(req, res, next) {
    console.log('reloading questions page');
    res.render('questions.jade', {
        title: 'Ask a question',
        img_src: '../images/worldinyourhand.jpg'
    });
});

router.post('/createQuestion', function(req, res) {
    db.addQuestion(req);
//    res.redirect('/questions');
});

module.exports = router;
