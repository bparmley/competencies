var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brandon Parmley Learning One Competency at a Time'});
});

router.post('/', function(req, res, next) {
  res.json({userName: req.body.userName, email: req.body.email});
});
module.exports = router;

var request = require('superagent');

router.get('/commitsData', function(req, res) {
    request.get('https://api.github.com/repos/UVU-DigitalMedia/DGM-Competency-Browser/commits?author=bparmley').end(function(err, response) {
    res.json(response);
    })
});