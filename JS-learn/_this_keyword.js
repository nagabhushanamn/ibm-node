/**
 * http://usejsdoc.org/
 */

// why we need 'this' keyword ?

/*
 * 
 * to access obj-properties in function ,
   instead of reference-var , always use 'this' keyword

 * 
 */


var person = {
	name : 'Nag',
	sayName : function() {
		console.log('im ' + this.name);
	}
};
// person.sayName();

var p = person;

person = {
	name : 'Ria'
};

//p.sayName();

//-----------------------------------------------



//var p1={name:'Nag',sayName:function(){console.log('im '+this.name);}};
//var p2={name:'Ria',sayName:function(){console.log('im '+this.name);}};

global.name='GLOBAL';

function sayNameForAll(){
	console.log('im '+this.name);
}

//static function-binding
//var p1={name:'Nag',sayName:sayNameForAll};
//var p2={name:'Ria',sayName:sayNameForAll};

//sayNameForAll();  // im GLOBAL  : function-invocation  ( this --> global-obj )
//p1.sayName();  // im Nag        : method-invocation    ( this --> invoker-obj ) 
//p2.sayName();  // im Ria


//---------------------------------------------------------


var p1={name:'Nag'};
var p2={name:'Ria'};


var personUtil={
		sayName:function(message,from){
			console.log(message +' im '+this.name +" : "+from);
		}
};

// dynamic function-binding  : call/apply/bind invocation --> ( this --> arg-obj )

//personUtil.sayName.call(p1,"Hello","BLR");  
//personUtil.sayName.call(p2,"Hi","CHN");
//
//personUtil.sayName.apply(p1,["Hello","BLR"]);  
//personUtil.sayName.apply(p2,["Hi","CHN"]);


var newF=personUtil.sayName.bind(p1,"Hello","BLR");  
// on greet-event on p1
//newF();


//----------------------------------------------------



function Person(name,age){
	this.name=name;
	this.age=age;
	this.sayName=function(){
		console.log('im '+this.name);
	};
}

var persons=[];
for (var i = 0; i < 1000; i++) {
	var p=new Person('Name'+i, i);   // constructor invocation ( this --> new-obj )
	persons.push(p);
}

persons.forEach(function(person, i) {
	console.log(person);
});


//-----------------------------------------------------------


// in JS , we can invoke function in 4 ways

/*
 * 1. function-invocation                ( this --> global-obj )
 * 2. method-invocation                  ( this -->invoker-obj )
 * 3. call/apply/bind invocation         ( this --> arg-obj )
 * 4. constructor invocation             ( this --> new-obj )
 * 
 */














