var express = require('express');
var router = express.Router();


/* GET - products from mongodb */
router.get('/', function(req, res, next) {
		res.render('index');
});

module.exports = router;
