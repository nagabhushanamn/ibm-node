/**
 * http://usejsdoc.org/
 */

global.name = 'GLOBAL';

function start() {
	
	//console.log(this);  // global
	
	function Trainer(name) {
		this.name = name;    // new-trainer
		this.doTeach = function() {
			console.log(this.name + " teaching JS"); // Nag .....
			var self = this;
			function learn() {
				console.log(this.name + ' learning JS from ' + self.name); // .....
			}
			return learn;
		};
	}

	var trainer = new Trainer('Nag');
	var learnFunc = trainer.doTeach();

	//
	var emp1 = {
		name : 'santhosh'
	};
	var emp2 = {
		name : 'mohan'
	};

	learnFunc.call(emp1);
	learnFunc.call(emp2);

}

start();