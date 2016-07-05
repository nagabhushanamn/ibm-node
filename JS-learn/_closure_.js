/**
 * http://usejsdoc.org/
 */

// closure

/*
 * A closure is a function having access to the parent scope, 
 * even after the parent function has closed.
 * 
 * use:
 * 
 *  --> to abstract public-behav of any module.
 *  --> to access parent-scoped data , while executing function asynch
 * 
 */

var trainer = {
	doTeach : function(sub) {
		console.log('teaching ' + sub);
		var i = 100;
		var notes = "notes on " + sub;
		console.log('teach ends..');
	
		function learn() {
			console.log('learn' + sub + ' with ' + notes);
		}

		return learn;
	}
};

var learnFunc = trainer.doTeach('JS'); // context init...( Args + Local )

learnFunc();
learnFunc();