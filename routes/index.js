var express = require('express');
var router = express.Router();
var request = require('superagent');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brandon Parmley Learning One Competency at a Time'});
});

router.post('/', function(req, res, next) {
  res.json({userName: req.body.userName, email: req.body.email});
});


router.get('/commits', function(req, res) {
    'use srict'
   res.render('commits', {title: 'Commits'})
});

router.get('/commitsData', function(req, res) {
    request.get('https://api.github.com/repos/UVU-DigitalMedia/DGM-Competency-Browser/commits?author=bparmley').end(function(err, response) {
    res.json(response);
    })
});





module.exports = router;
