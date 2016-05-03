(function () {
    'use strict';
   // this function is strict...
}());


var express = require('express');

var app = new express();


/* using the endpoint to render the response from the the ejs/html file to the directed listening port.  */
app.get('/', function (req, res) {
    res.render('./../app/index.ejs', {});
}).use(express.static(__dirname + '/../.tmp'))
.listen(7777);