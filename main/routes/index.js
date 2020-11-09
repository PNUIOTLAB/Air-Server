//필요없는 라우트임
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express sejin' });
});

module.exports = router;
