var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  console.log('>>>', req)
  res.json({
  	status: 200,
  	msg: '登录成功',
  	data: {
      username: 'admin'
  	}
  });
});

module.exports = router;
