/**
 * http://usejsdoc.org/
 */

//function sayName() {
//	console.log('im Nag');
//}
//function sayAge() {
//	console.log('im 32');
//}

//------------------------------

//
// var m = {
// sayName : sayName,
// sayAge : sayAge
// };

// module.exports = m;
// -------------------------------

// module.exports.sayName=sayName;
// module.exports.sayAge=sayAge;

// -------------------------------



function Person(name,age){
	this.name=name;
	this.age=age;
}
Person.prototype.sayName=function(){
	console.log('im '+this.name);
};


//var p=new Person('Nag', 32);
//module.exports=p;

module.exports=Person;

//---------------------------------

















