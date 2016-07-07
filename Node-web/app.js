/**
 * http://usejsdoc.org/
 */

var http = require('http');
var fs = require('fs');

// var url = require('url');

var server = http.createServer();

server.on('request', function(req, resp) {

	if (req.url === '/' && req.method === 'GET') {

		resp.writeHead(200, {
			'Content-Type' : 'text/html'
		});
		fs.readFile('index.html', function(err, data) {
			resp.write(data);
			resp.end();
		});
	}

});

server.listen(8080, function() {
	console.log('server running at http://localhost:8080');
});