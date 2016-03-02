var express = require('express');
var router = express.Router();

/* GET questions page */
router.get('/', function(req, res, next) {
    res.render('questions.jade', { title: 'Ask a question' });
});

router.post('/createQuestion', function(req, res) {
    console.log(req.body);
});

module.exports = router;
