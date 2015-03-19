var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brandon Parmley Learning Slowly but Surely'});
});

module.exports = router;
