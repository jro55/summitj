// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile('main.html', {root: './public/html/'})
});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})