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
    super(name); // 注释此句会报错
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

var d = new Dog('Mitzie');
d.speak();// 'Mitzie barks.'
