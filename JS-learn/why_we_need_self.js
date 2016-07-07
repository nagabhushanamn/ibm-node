/**
 * http://usejsdoc.org/
 */

var o = {
	prop : 'abc',
	outer : function() {
		console.log(this.prop);
		var me = this;
		function inner() {
			console.log(me.prop);
		}
		inner();
	}
};

o.outer();