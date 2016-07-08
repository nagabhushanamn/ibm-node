/**
 * http://usejsdoc.org/
 */

var mongoose = require('mongoose');

/*
 * basic steps to use 'mongoose'
 * 
 * step-1: create schema step-2: create Model class
 * 
 */

var schema = mongoose.Schema({
	id : Number,
	name : String,
	price : Number,
	description : String,
	date : Date
});

var Product = mongoose.model('Product', schema, 'products');

module.exports = Product;