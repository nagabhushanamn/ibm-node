/**
 * http://usejsdoc.org/
 */

var fs = require('fs');


/*
 *  thread-1
 *  ----------
 *  
 *  task-1:-
 *  
 *  --> open file ........
 *  --> create buffer ...
 *  --> read file ......
 *  --> process result...
 *  
 *  task-2:-
 *   
 * 
 * 
 */

var data=fs.readFileSync('menu1.txt', 'utf8'); //......... blocks , when IO happening..
console.log(data);

console.log('\nwith other work...');