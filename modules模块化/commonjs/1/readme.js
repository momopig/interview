// main.js
const a = require('./a'); // 1
console.log('in main, a.a1 = %j, a.a2 = %j', a.a1, a.a2); // true true


// a.js
exports.a1 = true;
const b = require('./b.js'); // 2
console.log('in a, b.done = %j', b.done); // undefined


exports.a2 = true;
// b.js
const a = require('./a.js');
console.log('in b, a.a1 = %j, a.a2 = %j', a.a1, a.a2); // true undeined


// in b, a.a1 = true, a.a2 = undefined
// in a, b.done = undefined
// in main, a.a1 = true, a.a2 = true
