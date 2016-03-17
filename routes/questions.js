var express = require('express');
var router = express.Router();

/* GET questions page */
router.get('/', function(req, res, next) {
    res.render('questions.jade', {
        title: 'Ask a question',
        img_src: '../images/worldinyourhand.jpg'
    });
});

router.post('/createQuestion', function(req, res) {
    console.log('createQuestion running');
    console.log(req);
    db.addQuestion(req);
    res.send('Question sent!');
});

module.exports = router;
