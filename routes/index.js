var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});
router.get('/getcity', function (req, res, next) {
  console.log("In getcity route");
  fs.readFile(__dirname + '/cities.dat.txt', function (err, data) {
    if (err) throw err;
    var cities = data.toString().split("\n");
    for (var i = 0; i < cities.length; i++) {
      console.log(cities[i]);
    }
  });
});

module.exports = router;
