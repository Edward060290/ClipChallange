var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../client/dist'));


//run in browser on localhost:3000
app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});
