function newFn1(constructor) {

  // 1. 创建纯对象{}
  const obj = {} // obj = new Object()

  // 2. 为纯对象建立原型链
  obj._proto_ = constructor.prototype


  return function() {
    constructor.apply(obj, arguments)
    return obj
  }
}
function newFn2(constructor) {
  const obj = {}
  obj._proto_ = constructor.prototype
  constructor.apply(obj, Array.prototype.slice.call(arguments, 1))
  return obj
}
function Person(name) {
  this.name = name
  this.sayName = function() {
    console.log(this.name)
  }
}
const person1 = newFn1(Person)('John')
const person2 = newFn2(Person, 'Mary')
person1.sayName() // John
person2.sayName() // Mary
