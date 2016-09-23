// Simple Node Http Server

// require modules
var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('static'));

app.get("/", function(req,res){
  res.render("index");
});

app.listen(port, function(){
  console.log("App listening on localhost:" + port);
});

