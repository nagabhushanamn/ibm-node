/**
 * http://usejsdoc.org/
 */

var trainer = {
	doTeach : function() {
		console.log('teaching....start');

		var notes = "js-Notes";  /// moved to heap.

		setTimeout(function() {
			try {
				console.log('after timeout....learning with ' + notes);
				// throw new Error('i hate learning..');
			} catch (e) {
				console.log('caught ' + e.message);
			}
		}, 5000);

		console.log('teaching end..');
	}
};

trainer.doTeach();