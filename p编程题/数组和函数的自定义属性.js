let array = [3, 2, 1]
array.a = 4
for(var key in array) console.log(key) // 0 1 2 a
array.hasOwnProperty('a') // true

let fn = () => {}
fn.a = 3
for(var key in fn) console.log(key) // a toString
fn.hasOwnProperty('a') // true

