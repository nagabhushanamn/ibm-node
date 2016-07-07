/**
 * http://usejsdoc.org/
 */

var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(req, resp) {

	// resp.writeHead(200, {
	// 'Content-Type' : 'text/plain'
	// });
	// resp.write('Welcome to Nodejs powered web-server');
	// resp.end();

	// -----------------------------
	resp.writeHead(200, {
		'Content-Type' : 'video/mp4'
	});
	// fs.readFile('Johny.mp4', function(err, data) {
	// resp.write(data);
	// resp.end();
	// });

	var rs = fs.createReadStream('Johny.mp4');
	// rs.on('data', function(chunk) {
	// console.log(chunk.length);
	// resp.write(chunk);
	// });
	// rs.on('end', function() {
	// resp.end();
	// });
	rs.pipe(resp);

	// -------------------------------

});

server.listen(8080, function() {
	console.log('server listening on http://localhost:8080');
});