let b = require('./b.js')
console.log(exports.x)
exports.x = 'x'
let c = require('./c.js')

// {}
// y
// x
