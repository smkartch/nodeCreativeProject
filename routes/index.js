var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/cat', function(req, res) {
  console.log("in cat route");
  var catrest = "https://api.thecatapi.com/v1/images/search";
  request(catrest).pipe(res);
});

module.exports = router;
