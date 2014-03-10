// Module Dependencies
var express = require('express');

var app = express();

// Configure
app.use(express.static(__dirname + '/public'));

// Define Routes

app.get('/', function (req, res) {
  res.sendfile('public/index.html');
});

app.get('/slides/UX', function (req, res) {
  res.sendfile('public/slides/UX/index.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

