
npm install body-parser --save

```javascript 1.8

/* Parse the body of the req object*/
var bodyParser = require('body-parser');

/* Add Middleware to app*/
exp.use(bodyParser.urlencoded({extended:true}));
exp.use(bodyParser.json());
.post(function(req,res){

    /* create book in database */
    var book = new Book(req.body);

    console.log(book);

    /* then respond with a copy of that book */
    res.send(book);
})


```

In Postman 
Set to 
  post localhost:3000/api/books/
  json
  In Header set
    content-type = application/json
  Select Body
    then raw
    then past the following
    
```javascript 1.8
/* Body */
{
  "title": "Rocky 200",
  "genre": "Super Fake",
  "author": "Sylvester Stalone",
  "read": false
}
/* then hit send */
```
