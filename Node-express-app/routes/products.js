/**
 * http://usejsdoc.org/
 */

var express = require('express');
var router = express.Router();

// GET: /products

router.get('/', function(req, res) {
	res.send('get products');
});


// POST: /products/brand
router.post('/brand', function(req, res) {
	res.send('post products');
});

module.exports = router;