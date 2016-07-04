/**
 * http://usejsdoc.org/
 */

"use strict"

/*
 *  in JS , function can be declared/created in 2ways
 * 
 *  1. function declaration
 *  2. function expression
 *  
 *  // be default , function declaration will get hoisted with func-obj,
 *     and func-expression wont.
 * 
 */

// 1. function dec

//console.log(add(12,13));

//function add(n1,n2){
//	return n1+n2;
//}

//console.log(add(12,13));

//--------------------------------



//console.log(add(12,13));
//
//var add=function(n1,n2){
//	return n1+n2;
//};

//console.log(add(12,13));

//--------------------------------


/*
 *  
 *  class/constructor-function  ----> A___B___
 *  var/func/methods            ----> ____A____B___
 *  keywords                    ----> lower-case
 *  constants                   ----> upper-case
 * 
 */

//---------------------------------


//a.function as values


function sayHello(){
	console.log('Hello');
}

var sayHi=sayHello;  // assign like as value.
//sayHi();


//---------------------------------


//b. function as arguments

function greet(f){
	if(f){
		f();
		return;
	}
	console.log('Hello..');
}

//greet();
//greet(function(){console.log('ola');});

//----------------------------------------------

var nums=[1,3,5,7,9,2,4,6,8,10];
//nums.sort();
nums.sort(function(a,b){return b-a;});
//console.log(nums);


//-----------------------------------------------

// functions as return-values

function teach(){
	
	console.log('teaching...');
	
	function learn(){
		console.log('learn..');
	}
	
	return learn;
	
}

//var learnFunc=teach();
//
//learnFunc();
//learnFunc();


//-----------------------------------------------


function f(a,b){
	console.dir(arguments);
	return arguments[0]+" "+arguments[1];
}

//console.log(f(12,13,14));

//---------------------------------------------------

//function sum(){
//	var len=arguments.length,
//	    result=0,
//	    i=0;
//	while(i<len){
//		result+=arguments[i];
//		i++;
//	}
//	return result;
//}
//
//console.log(sum(1,2,3,4,5,6,7,8,9,10));



//---------------------------------------------------

/*
 *  var-scope
 *  ---------
 *  
 *  --> global-scope
 *  --> function-scope
 *  
 *  // ES-6
 *  
 *  --> block-scope with 'let' keyword ( in strict-mode )
 *  
 * 
 */


var i=100;

function f(){
	{
		//let i=200;
	}
	console.log(i);
}
//f();

//-------------------------------------------

//var p=10;

function f(){
	 p=100;   // implicit global in non-strict mode
}

f();

console.log(p);

















