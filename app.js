/**
 * Created by David on 2/22/2017.
 */

var express = require('express');
var mongoose = require('mongoose');

//var db = mongoose.connect('mongodb://localhost/bookAPI')
var db = mongoose.connect('mongodb://heroku_hjnzjw31:c7gafe2hhteac3khq7cccece95@ds049925.mlab.com:49925/heroku_hjnzjw31');
var Book = require('./models/bookModel');

app = express();

var port = process.env.PORT || 3000;

var bookRoute =  express.Router();

bookRoute.route('/Books')
    .get(function(req,res){

        var query = {};

        if (req.query.genre){
            query.genre = req.query.genre;
        }
        Book.find(query, function(err,books){
            if (err){
                res.status(500).send(err);
            }
            else
                res.json(books);
            })
    });

app.use( '/api', bookRoute);

app.get('/', function (req, res){
    res.send('welcome to my API!');
});

app.listen(port, function () {
    console.log( 'running on port ' + port );
});