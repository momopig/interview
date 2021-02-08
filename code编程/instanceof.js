function F1() {}
function F2() {}
const f1 = new F1()
F2.prototype = f1
const f2 = new F2()
console.log(f2 instanceof F1) // true
console.log(f2 instanceof F2) // true
