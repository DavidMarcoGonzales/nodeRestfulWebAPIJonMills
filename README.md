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

4. create route /  return comment
   app.get('/', function (req, res){
       res.send('welcome to my API!');
   });

5. listen on port and print comment
   app.listen(port, function () {
       console.log( 'running on port ' + port );
   });
```
6. run node app.js and open localhost:3000 from browser
