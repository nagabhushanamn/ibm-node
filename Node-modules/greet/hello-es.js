/**
 * http://usejsdoc.org/
 */

var messages = require('./greet-messages.json');

function sayHello() {
	console.log(messages.es);
}
module.exports = sayHello;