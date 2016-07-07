var express = require('express');
var router = express.Router();

var Product = require('../model/Product');

/* GET - products from mongodb */
router.get('/', function(req, res, next) {

	// Non-blocking IO ( key )
	Product.find({}, function(err, items) {
		res.render('pm', {allProducts:items});
	});

});

module.exports = router;
