/**
 * Created by David on 2/22/2017.
 */

var express = require('express');

app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req, res){
    res.send('welcome to my API!');

});

app.listen(port, function () {
    console.log( 'running on port ' + port );
});