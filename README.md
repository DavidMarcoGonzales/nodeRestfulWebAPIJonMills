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
var express = require('express');

app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req, res){
    res.send('welcome to my API!');

});

app.listen(port, function () {
    console.log( 'running on port ' + port );
});
```
6. node app.js and open localhost:3000 from browser
