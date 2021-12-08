var express = require('express');
var router = express.Router();
var fs = require('fs');
fs.readFile(__dirname + '/cities.dat.txt', function (err, data) {
  if (err) throw err;
  var cities = data.toString().split("\n");
  for (var i = 0; i < cities.length; i++) {
    console.log(cities[i]);
  }
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});
router.get('/getcity', function (req, res, next) {
  console.log("In getcity route");
});

module.exports = router;
