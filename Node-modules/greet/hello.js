/**
 * http://usejsdoc.org/
 */

var en = require('./hello-en');
var es = require('./hello-es');

function sayHello(lang) {
	if (lang === 'en') {
		en();
	}
	if (lang === 'es') {
		es();
	}
}

//
//function sayName() {
//	console.log('im Node');
//}

// sayHello();

module.exports = sayHello;