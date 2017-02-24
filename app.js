/**
 * Created by David on 2/22/2017.
 */

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//var db = mongoose.connect('mongodb://localhost/bookAPI')
var db = mongoose.connect('mongodb://heroku_hjnzjw31:c7gafe2hhteac3khq7cccece95@ds049925.mlab.com:49925/heroku_hjnzjw31');

var mgmBook = require('./models/bookModel');
var exp = express();
var port = process.env.PORT || 3000;

exp.use(bodyParser.urlencoded({extended:true}));
exp.use(bodyParser.json());
var expRtrBook =  express.Router();


expRtrBook.route('/Books')
    .post(function(req,res){
        var book = new mgmBook(req.body);
        book.save();

        res.status(201).send(book);
    })
    .get(function(req,res){
        var query = {};

        if (req.query.genre) {
            query.genre = req.query.genre;
        }
        mgmBook.find(query, function (err, books) {
            if (err) {
                res.status(500).send(err);
            }
            else{
                res.json(books);
            }
        })
    });
expRtrBook.route('/Books/:id')
    .get(function(req,res){

        mgmBook.findById(req.params.id, function(err,book){
            if (err){
                res.status(500).send(err);
            }
            else
                res.json(book);
        })
    });

exp.use( '/api', expRtrBook);

exp.get('/', function (req, res){
    res.send('welcome to my API!');
});

exp.listen(port, function () {
    console.log( 'running on port ' + port );
});