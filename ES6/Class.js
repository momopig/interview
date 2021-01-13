class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(); // 虽然Dog构造函数接收了name参数，但是没有传给super，dog实例对象虽然有name属性，但是没初始化
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

var d = new Dog('Mitzie');
d.speak();// 'undefined barks.'
