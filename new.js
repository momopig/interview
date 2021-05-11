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
const person2 = newFn2(Person, 'Mary')
person1.sayName() // John
person2.sayName() // Mary
