/**
 * http://usejsdoc.org/
 */

var messages=require('./greet-messages.json');

function sayHello(){
	console.log(messages.en);
}
module.exports=sayHello;