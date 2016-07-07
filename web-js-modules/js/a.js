/**
 * http://usejsdoc.org/
 */

// (function() {
//
// //
// app.b.doWork();
// app.c.doWork();
//
// var o = {
// doWork : function() {
// console.log('A work..');
// }
// };
//
// app.a = o;
//
// })();
// ---------------------------

define('js/a', ['js/b','js/c'], function(b,c) {

	
	b.doWork();
	c.doWork();
	
	var o = {
		doWork : function() {
			console.log('A work..');
		}
	};
	
	return o;

});
