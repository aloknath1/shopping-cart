var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/cart/assets/'));
app.use('/cart', express.static(__dirname + '/cart'));

app.get('/', function (req, res) {
  res.render('index.html');
})

app.listen(3000, function () {
  console.log('App is listening on port 3000');
})