/**
 * http://usejsdoc.org/
 */

var a = 12;

function f() {

	// var a;

	function ff() {
		console.log(a);
		// var a = 13;
	}

	a = 15;

	// ff();

	return ff;

}

var ffFunc = f();

ffFunc();