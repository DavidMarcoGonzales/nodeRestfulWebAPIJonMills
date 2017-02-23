# nodeRestfulWebAPIJonMills
Jonathan Mills course on Rest with node and express

Create github repository nodeRestfulWebAPIJonMills
clone nodeRestfulWebAPIJonMills to c:/users/dave/
cd to nodeRestfulWebAPIJonMills

1. install node
   create empty project in webstorm
   select markdown navigator plugin

2. npm init
   to use node package manager
   by setting up package.json config file
   bookapi

3. npm install --save express
   --save saves expres in package.json

4. create app.js

5. add the following
```
1. pull in express
   var express = require('express');

2. create server call it app
   app = express();

3. set port
   var port = process.env.PORT || 3000;

4. create root route /  return comment, 
   second parameter is callback with rec and res args
   res.send sends back a string of text
   app.get('/', function (req, res){
       res.send('welcome to my API!');
   });

5. listen on port and print comment
   app.listen(port, function () {
       console.log( 'running on port ' + port );
   });
```
6. run node app.js and open localhost:3000 from browser

Getting Data

1. Create a router named bookRouter
   modify app.js by adding the following above app.get('/'.....
```
   1. create bookRouter instance
      var bookRoute =  express.Router();

   2. setup the book router
      res.json(responseJson) returns a json object
      bookRoute.route('/Books')
         .get(function(req,res){
           var responseJson = {hello: "This is my app"};
   
           res.json(responseJson)
          });
   
   3. sets up base for our api
      and add bookrouter middleware to server
      app.use( '/api', bookRoute);

```
2. run node app.js open localhost:3000/api/books

Install (complete) mongoose from https://www.mongodb.com/
1. Mongoose 
   connects to our mongodb
   creates data models
   
Install Robomongo from https://robomongo.org/

Install mongoose
1. npm install --save mongoose
   
   (mongoose orm like entity framework)

2. require mongoose

```
   var mongoose = require('mongoose');
```

3. have mongoose connect to mongo database
   our connection string = mongodb://bookAPI
   creates collection on mongodb if it doesn't exist
   holds that collection while server is running
   connects to that collection bookAPI on our local mongo server

```
   var db = mongoose.connect('mongodb://localhost/bookAPI');
or
   var db = mongoose.connect('mongodb://heroku_hjnzjw31:c7gafe2hhteac3khq7cccece95@ds049925.mlab.com:49925/heroku_hjnzjw3x');

```


Create First Model
1. create bookModel file.
```
   var Book = require('./models/bookModel');
```

2. in bookModel create the model from the json bookSchema 
```
   var mongoose = require('mongoose');
   var Schema = mongoose.Schema();

1. Create a Schema
   var bookSchema = new Schema({
       title: {type: 'string'},
       author: {type: 'string'},
       genera: {type: 'string'},
       read: {type: Boolean, default: false}
   })
2. Create a model named 'Book' 
   From the bookSchema, 
   We are gonig to load Book model into mongoose
   export the 'Book' model
   modeule.exports = mongoose.model('Book', bookSchema)
```

Back to app.js
   inside 

```
   bookRoute.route('/Book').get(function(req,res){...
```   

   add the following

```
   Book.find(function(err,books){
       if (err){
           console.log(err)
       }
       else
           res.json(books);
       })
```   
   
C:\Program Files\MongoDB\Server\3.4\bin> & .\mongod.exe
   starts mongod.exe server
node app.js
   starts node
localhost:3000/api/books
   calls books api
   books.find queries mongodb to get collection of books
