//필요없는 라우트임

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send("please run sibal");
});

module.exports = router;










