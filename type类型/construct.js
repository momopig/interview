function GrandParent() {

}
function Parent () {

}
function Son() {

}
const grandParent = new GrandParent()
Parent.prototype = grandParent
const parent = new Parent()
Son.prototype = parent
const son1 = new Son()
console.log(son1.__proto__.constructor === Parent) // false
console.log(son1.constructor === Parent) // false
console.log(son1.__proto__.constructor === GrandParent) // true
console.log(son1.constructor === GrandParent) // true，原型链上最后一个对象grandParent对象


Son.prototype = new Date()
console.log(son1.constructor === Parent) // false
console.log(son1.constructor === GrandParent) // true
console.log(son1.constructor === Date) // false

const son2 = new Son()
console.log(son2.constructor === Date) // true,原型链上最后一个原型对象是Date对象
