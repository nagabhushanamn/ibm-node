/**
 * http://usejsdoc.org/
 */

//function init() {
//
//	// private
//	var count = 0;
//
//	// public
//	var mod = {
//		doCount : function() {
//			count++;
//		},
//		getCount : function() {
//			return count;
//		}
//	};
//	
//	return mod;
//}
//
//var counter = init();
//var counter2 = init();

//-----------------------------

// self-executable func or IIFE
//-------------------

var counter=(function(){
	
	// private
	var count = 0;

	// public
	var mod = {
		doCount : function() {
			count++;
		},
		getCount : function() {
			return count;
		}
	};
	
	return mod;
	
})();

// ----------------------------

counter.doCount();
counter.doCount();
counter.doCount();

// count=10000; // un-expected...

console.log(counter.getCount());