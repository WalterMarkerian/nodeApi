var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET nosotros page. */
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'We are...' });
});

/* GET productos page. */
router.get('/productos', function(req, res, next) {
  res.render('productos', { title: 'Our products...' });
});

module.exports = router;
