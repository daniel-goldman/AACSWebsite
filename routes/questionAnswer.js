var express = require('express');
var router = express.Router();

/* GET questionAnswer page */
router.get('/', function(req, res, next) {
    res.render('questionAnswer.jade', { title: 'Answer a Question' });
});

router.post('/retrieveRandomQuestion', function(req, res) {
    console.log('retrieveRandomQuestion called');
    console.log('callback: ' + db.retrieveRandomQuestion(req));
});

module.exports = router;
