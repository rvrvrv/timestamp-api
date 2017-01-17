var express = require('express');
var strftime = require('strftime'); //Date-formatting module
var app = express(); //Simple server setup
var port = process.env.PORT || 8080; //Let Heroku set the port

//Landing page with instructions
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});


//Actual Timestamp API functionality
app.get('/:timeOrDate', function(req, res) {
  //Convert user entry to a number
  var userEntry = Number(req.params.timeOrDate);
  
  //If user entry isn't a number, parse the date out of it
  if (isNaN(userEntry)) var theTime = Date.parse(req.params.timeOrDate);
  /*If user entry is a number, then it's a unix timestamp.
  Value is multiplied by 1000 for proper JS millisecond (ms) value*/
  else theTime = new Date(userEntry*1000);
  
  //If entry is invalid (couldn't be converted), return both null
  if (isNaN(theTime)) res.send({'unix':null,'natural':null});
  //Otherwise, return the correctly formatted values
  else res.send({
    'unix':(theTime/1000), //Divided by 1000 for correct unix output
    'natural':strftime('%B %d, %Y', new Date(theTime))
  });
});


app.listen(port, function () {
  console.log('This app is running on port ' + port);
});

