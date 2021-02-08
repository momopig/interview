class Parent {
  constructor(name) {
    this.name = name
  }
  sayName () {
    console.log(this.name)
  }
}
class Son extends Parent {
  constructor(name, age) {
    super(name)
    this.age = age
  }
  sayAge() {
    console.log(this.age)
  }
  getAge() {
    return this.age
  }
}
const s1 = new Son('son', 12)
s1.sayName()
s1.sayAge()
