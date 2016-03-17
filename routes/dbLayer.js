var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

/* Interact with database */
var db = function() {
    mongoose.connect('mongodb://localhost:27017/Database');
    var db = mongoose.connection;
    var questionSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        email: String,
        question: String
    });
    question = mongoose.model('questions', questionSchema);

    // check if connection opened successfully
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function() {
        console.log('connection OK');
        console.log('database server running at localhost:3000');
    });

    // add a question to the database
    this.addQuestion = function(req) {
        question.count({ 'question': req.body.question }, function(err, count) {
            // input validation
            if(count === 0) {
                question.create({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    question: req.body.question
                });
                console.log('question successfully added');
            }
            else if(count > 0) {
                console.log('question already exists');
            }
        });
    };

    // retrieve a random question from the database
    this.retrieveRandomQuestion = function(req) {
        question.count().exec(function(err, count) {
            var random = Math.floor(Math.random() * count);

            question.findOne().skip(random).exec(
                function (err, result) {
                    return result;
            });
        });
    };
}

module.exports = db;
