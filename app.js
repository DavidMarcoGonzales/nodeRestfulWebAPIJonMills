/**
 * Created by David on 2/22/2017.
 */

var express = require('express');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI')
var Book = require('./models/bookModel');

app = express();

var port = process.env.PORT || 3000;

var bookRoute =  express.Router();

bookRoute.route('/Books')
    .get(function(req,res){
        Book.find(function(err,books){
            if (err){
                console.log(err)
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