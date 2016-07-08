/**
 * http://usejsdoc.org/
 */

// CRUD
var express = require('express');
var router = express.Router();

var Product=require('../model/Product');


/*
 *  REST API
 *  ---------
 *  
 *  GET - /products
 *  GET - /products/{id}  or GET - /products?id=123
 *  
 *  POST - /products
 *  
 *  PUT - /products/{id}
 *  
 *  DELETE - /products/{id}
 * 
 */

router.get('/', function(req, res) {
	Product.find({},function(err,items){
		res.render('pm',{allProducts:items});
	});
});
router.get('/edit/:prodId', function(req, res) {
	console.log(req.params.prodId);
	Product.findOne({id:req.params.prodId},function(err,item){
		res.render('edit-product-form',{product:item,action:'edit'});
	});
});
router.post('/', function(req, res) {
	
	//	var id=req.params.id;
	//	var name=req.params.name;
	//	var price=req.params.price;
	//	var description=req.params.description;
	
	//console.dir(req.body);

	var doc = {
		id : req.body.id,
		name : req.body.name,
		price : req.body.price,
		description : req.body.description,
		date : new Date()
	};
	
	console.log(req.body.action);
	
	if(req.body.action==='edit'){
		Product.update({id:req.body.id}, doc, function() {
			res.redirect('products');
		});
	}else{
		var newProduct=new Product(doc);
		newProduct.save(function(err, product, numberAffected) {
			//res.render('pm',{message:product.name+' saved..',allProducts:null});
			res.redirect('products');
		});
	}
	
	
});


router.put('/:prodId', function(req, res) {

	var doc = {
		id : req.params.prodId,
		name : req.params.name,
		price : req.params.price,
		description : req.params.description,
		date : new Date()
	};
	
	Product.findOneAndUpdate(doc, function() {
		res.render('pm',{message:'updated'});
	});
	
});


router.get('/del/:prodId', function(req, res) {

	Product.remove({id:req.params.prodId}, function(err) {
		//res.render('pm',{message:'deleted'});
		res.redirect('/products');
	});
	
});


module.exports=router;





