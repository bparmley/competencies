var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var brandon = {
    name: 'Brandon',
    age: '30',
    job: 'Web Front End Architect and Web Developer',
    competencies: 'HTML5, CSS3, JavaScript, jQuery, Bootstrap, Joomla, Wordpress, Omni Update Campus Edition'
  };

  res.send(brandon);
});

router.get('/post', function (req, res, next) {
  res.send('No data provided, try again...');
});

router.post('/post', function (req, res, next) {
  res.render('post', {name: req.body.name, age: req.body.age, job: req.body.job, competencies: req.body.competencies});

});

module.exports = router;
