function Parent(name) {
  this.name = name

  // 不能用箭头函数
  this.sayName = function() {
    console.log(this.name)
  }

}
function Son(name, age) {

  // 还有this.Parent(name)或Parent.apply(this, [name])
  Parent.call(this, name)
  this.age = age
  this.sayAge = function() {
    console.log(this.age)
  }
}
const p1 = new Parent('father')
Son.prototype = p1
const s1 = new Son('son')
s1.sayName()
