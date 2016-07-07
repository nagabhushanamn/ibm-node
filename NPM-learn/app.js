/**
 * http://usejsdoc.org/
 */

// 
var _ = require('underscore');

// var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

// var bigNum = _.max(arr);
// console.log(bigNum);

function findMaxArry(arr) {
	return _.max(arr);
}
function findMinArry(arr) {
	return _.min(arr);
}

//module.exports.findMax=findMaxArry;
//module.exports.findMin=findMinArry;