/**
 * http://usejsdoc.org/
 */


// a. string

var name="nag";
var selection='a';

//console.log(typeof name);
//console.log(typeof selection);

//-----------------------------------

// b. number

var count=12;
var cost=12.12;

//console.log(typeof count);
//console.log(typeof cost);

//-------------------------------------


// c. boolean

var found=true;

//console.log(typeof found);

/*
 *  imp-note
 *  
 *  in JS , falsy values
 *  
 *  false,0,"",null,undefined,NaN
 * 
 */


//---------------------------------------


// d. undefined

//var v;
//console.log(typeof v);



//---------------------------------------


//e. null

var person=null;

//console.log(typeof person);


//---------------------------------------


// Reference Types: ( objects )



var person=new Object();
person.name='Nag';
person.age=32;
person.doWork=function(){
	//console.log('Teaching JS');
};


//console.log(person.name);
person.doWork();

delete person.age;

//console.log(person.age);

person=null;

//--------------------------------------



/*
 *  a. Object   --> to create obj-wrapper
 *  b. Array
 *  c. RegExp
 *  d. Function
 * 
 * 
 */

// a. Object

var emp=new Object();
emp.id=123;
emp.name='Nag';
emp.doWork=function(){
	//console.log('emp working...');
};

// literal style

var emp={
		id:123,
		name:'Nag',
		doWork:function(){
			//console.log('emp working...');
		}
};

emp.doWork();

//-------------------------------------------

// b. Array

var colors=new Array();
colors.push('red');  // 0
colors[1]="green";   // 1
colors.push("blue"); // 2

//console.log(colors);

// literal-style

var colors=["red","green","blue"];


//var funcArray=[function(){console.log('a');},function(){console.log('b');}];
//funcArray[0]();

//-------------------------------------------


// c. RegExp

var re=new RegExp('\\d{10}');
//console.log(re.test("1234567890"));


// literal style

var ssnPattern=/\d{3}-\d{2}-\d{4}/;
var ssn="12-23-2312";
if(ssnPattern.test(ssn)){
	//console.log('valid');
}


//-------------------------------------------



// d. Function

var add=new Function("n1","n2",'var result=n1+n2;return result;');
//console.log(add(12,13));


// literal style

function add(n1,n2){
	var result=n1+n2;
	return result;	
}


var r=add(12,13);
//console.log(r);

//-------------------------------------------



// how to access obj's properties ?

/*
 *  2-ways
 *  
 *  --> '.' notation
 *  --> '[]' notation
 * 
 */

var person={
		name:'Nag',
		'full-name':'Nag N'
};

console.log(person.name);
//console.log(person['name']);

console.log(person['full-name']);


var prop='name';
console.log(person[prop]);

//-------------------------------------













