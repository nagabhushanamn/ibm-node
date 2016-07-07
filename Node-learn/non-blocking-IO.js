/**
 * http://usejsdoc.org/
 */

var fs = require('fs');

// 

fs.open('menu1.txt', 'r', function(err, fd) {

	if (err) {
		return;
	}
	console.log('\nmenu1.txt file opened....');

	var buffer = new Buffer(100000);

	fs.read(fd, buffer, 0, 100000, null, function(err, len) {
		if (err) {
			return;
		}
		console.log('menu1.txt file red...');
		console.log(buffer.toString('utf8', 0, len));

		fs.close(fd, function() {
			//
		});
	});

});

// ----------------------------------------------------

fs.open('menu2.txt', 'r', function(err, fd) {
	if (err) {
		return;
	}
	console.log('\nmenu2.txt file opened....');
	var buffer = new Buffer(100000);
	fs.read(fd, buffer, 0, 100000, null, function(err, len) {
		if (err) {
			return;
		}
		console.log('menu2.txt file red...');
		console.log(buffer.toString('utf8', 0, len));
		console.log('\n');
		fs.close(fd, function() {
			//
		});
	});

});

console.log('\ncontinue with work..');