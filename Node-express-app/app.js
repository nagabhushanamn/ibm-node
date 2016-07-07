/**
 * http://usejsdoc.org/
 */

var app = require('express')();
var products = require('./routes/products');
// var app = express();

// ----------------------------------------




/*
 * 1. Application-level middleware
 * 
 */

var myLogger = function(req, res, next) {
	console.log('LOGGED');
	next();
};

app.use(myLogger);

app.use('/user/:id', function(req, res, next) {
	console.log('Request Type:', req.method);
	next();
});

app.use('/user/:id', function(req, res, next) {
	console.log('Request URL:', req.originalUrl);
	next();
}, function(req, res, next) {
	console.log('Request Type:', req.method);
	next();
});

// ----------------------------------------
// basic-routing
// ---------------------------------------

app.all('/', function(req, res, next) {
	console.log('logging.....');
	next();
});

app.get('/', function(req, res) {
	res.send('Hello-World');
});

app.post('/', function(req, res) {
	res.send('Got a POST request');
});

app.put('/', function(req, res) {
	res.send('Got a PUT request at /');
});

app['delete']('/', function(req, res) {
	res.send('Got a DELETE request at /');
});

app.get('/about', function(req, res) {
	res.send('about');
});

app.get('/random.text', function(req, res) {
	res.send('random.text');
});

app.get('/ab?cd', function(req, res) {
	res.send('ab?cd');
});

app.get('/ab+cd', function(req, res) {
	res.send('ab+cd');
});
app.get('/ab*cd', function(req, res) {
	res.send('ab*cd');
});
app.get('/ab(cd)?e', function(req, res) {
	res.send('ab(cd)?e');
});

// app.get(/a/, function(req, res) {
// res.send('/a/');
// });

app.get(/.*fly$/, function(req, res) {
	res.send('/.*fly$/');
});

// ------------------------------------------

app.get('/users/:userId/books/:bookId', function(req, res) {
	res.send(req.params);
});

// ------------------------------------------

app.get('/example/a', function(req, res) {
	res.send('Hello from A!');
});

app.get('/example/b', function(req, res, next) {
	console.log('the response will be sent by the next function ...');
	// res.send('.....');
	next();
}, function(req, res) {
	res.send('Hello from B!');
});

// -------------------------------------------
var cb0 = function(req, res, next) {
	console.log('CB0');
	next();
}

var cb1 = function(req, res, next) {
	console.log('CB1');
	next();
}

var cb2 = function(req, res) {
	res.send('Hello from C!');
}

app.get('/example/c', [ cb1, cb0, cb2 ]);
// -------------------------------------------

// request-end methods

// app.get('/products',function(req,res){
// // load this data from mongodb
// var products=[{name:'Laptop'},{name:'Mobile'}];
// //res.json(products);
// //res.render('products-view',products); // template
// });

app.get('/report', function(req, res) {
	res.download('JSBP_full.pdf');
});

app.get('/search', function(req, res) {
	res.redirect('http://www.google.com');
});

// ------------------------------------------

app.route('/book').get(function(req, res) {
	res.send('Get a random book');
}).post(function(req, res) {
	res.send('Add a book');
}).put(function(req, res) {
	res.send('Update the book');
});

// ---------------------------------------

// app.get('/products', function(req, res) {
// res.send('get products');
// });
//
// app.post('/products/brand', function(req, res) {
// res.send('post products');
// });

app.use('/products', products);


// 3. Error-Level middle-level

app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('Something broke!');
});

app.listen(3000, function() {
	console.log('server running at http://localhost:3000');
});