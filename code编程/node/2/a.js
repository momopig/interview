// a.js
let b = require ( './b.js' )
const b = require('./b.js')
console .log( 'a.js-1' , b.count)
b.plusCount()
console .log( 'a.js-2' , b.count)
setTimeout ( () => {
    b.count = 3
    console .log( 'a.js-3' , b.count)
}, 2000)

// node a.js
// a.js-1 1
// a.js-2 1
// b.js-1 2
// a.js-3 3
