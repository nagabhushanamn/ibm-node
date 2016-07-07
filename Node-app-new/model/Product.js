/**
 * http://usejsdoc.org/
 */

var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
	name : String,
	price : Number,
	mfg : Date,
	description : String,
	id : Number
});

var Product = mongoose.model('Product', ProductSchema, 'Product');

module.exports = Product;