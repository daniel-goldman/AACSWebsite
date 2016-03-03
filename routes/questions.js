var express = require('express');
var router = express.Router();
var db = require('./dbLayer');

var db = new db();

/* GET questions page */
router.get('/', function(req, res, next) {
    res.render('questions.jade', { title: 'Ask a question' });
});

router.post('/createQuestion', function(req, res) {
    db.addQuestion(req);
    res.redirect('/questions');
});

module.exports = router;
