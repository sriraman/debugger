var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var jsonParser = bodyParser.json();

app.post('/', jsonParser, function (req, res) {
  
  if (req.body && req.body.url) {
    console.log(req.body.url);
  } else {
    console.log(req.body);
  }


  res.send('DONE');
})

var server = app.listen(3030, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:%s", host, port)
})