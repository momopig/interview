function GrandParent() {

}
function Parent () {

}
function Son() {

}
const grandParent1 = new GrandParent()
Parent.prototype = grandParent1
const parent1 = new Parent()
// 等价于如下
// const parent1 = {
//   constructor: Parent
// }
Son.prototype = parent1
const son1 = new Son()
console.log(son1.__proto__.constructor === Parent) // true
console.log(son1.constructor === Parent) // true
Son.prototype = new Date()
console.log(son1.constructor === Parent) // true
const son2 = new Son()
console.log(son1.constructor === Date) // true
console.log(son2.constructor === Date) // true

