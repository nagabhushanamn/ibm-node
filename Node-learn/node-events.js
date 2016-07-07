/**
 * http://usejsdoc.org/
 */

/*
 * 
 * an instance of EventEmitter class , can emit 'event' , by listening that
 * event can execute functions async
 * 
 * 
 */

var events = require('events');
var util = require('util');

var EventEmitter = events.EventEmitter;

// var ee = new EventEmitter();

// ee.on('eat', function() {
// console.log('eating...');
// });
// ee.on('drink', function() {
// console.log('drinking...');
// });
//
//
// ee.emit('eat');
// ee.emit('drink');

// ---------------------------------------

// Door-Module ( class )

function Door() {
	this.open = function() {
		console.log('door opened...');
		// emit event...
		this.emit('door-open');
	};
	this.close = function() {
		console.log('door closed...');
		// emit event...
		this.emit('door-close');
	};
}
util.inherits(Door, EventEmitter);

var door = new Door();

// -----------------------------------

var light = {
	init : function() {

		door.on('door-open', function() {
			console.log('Lights ON');
		});
		door.on('door-close', function() {
			console.log('Lights OFF');
		});

	}
};
light.init();

var AC = {
	init : function() {

		door.on('door-open', function() {
			console.log('AC ON');
		});
		door.on('door-close', function() {
			console.log('AC OFF');
		});

	}
};
AC.init();

// -----------------------------------

setTimeout(function() {
	door.open();
}, 2000);
setTimeout(function() {
	door.close();
}, 5000);

// ----------------------------------

