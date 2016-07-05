/**
 * http://usejsdoc.org/
 */

//var person = {
//	name : 'Nag'
//};

//// way-1
//if (person.name) {
//	console.log('name property exist..');
//}
//
//// way-2
//if ("name" in person) {
//	console.log('name property exist..');
//}

//----------------------

"use strict";
//
//var person = {
//	name : 'Nag'
//};
//Object.defineProperty(person, 'name', {configurable:false,writable:false})

//Object.defineProperty(person, 'name', {configurable:true})
//delete person.name;

//person.name='';
//
//console.log(person.name);


//-----------------------------

var person = {
name : 'Nag',
age:32
};

//Object.preventExtensions(person);
//Object.seal(person);
Object.freeze(person);

//person.newProp='value';
//delete person.name;
//person.age=0;

//-------------------------------

/*
 *  JS -objs , can have 2 types of properties
 *  
 *  1. Data prperty
 *  2. Accessor property ( set , get )
 * 
 */

var person={
		// data property
		_name:'Nag',
		// accessor property
		set name(newName){
			if(newName){
			this._name=newName;
			}
		},
		get name(){
			return this._name;
		}
};

person.name='New Nag'; // set
console.log(person.name); // get































