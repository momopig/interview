function Parent(name) {
  this.name = name

  // 不能用箭头函数
  this.sayName = function() {
    console.log(this.name)
  }

}
function Son(name) {

  // 评价：继承有时候是为了代码复用，这里还是有重复代码
  this.name = name
}
const p1 = new Parent('father')
Son.prototype = p1
const s1 = new Son('son')
s1.sayName()
