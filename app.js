//using express to serve the app

var path = require('path');
var express = require('express');

var app = express();

//serve static files
app.use(express.static(path.join(__dirname, 'public')));

//route for everything else {
  app.get('*', function(req,res){

  });

  // hope this works
  app.listen(3000);
  console.log('Listening on port 3000');
