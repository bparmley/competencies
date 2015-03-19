var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brandon Parmley Learning One Competency at a Time'});
});

router.post('/', function(req, res, next) {
  res.json({
    userName: req.body.username,
    email: req.body.email
    })
});
module.exports = router;
