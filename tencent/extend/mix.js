//父类：人
function Person () {
  this.head = '脑袋瓜子';
  this.emotion = ['喜', '怒', '哀', '乐']; //人都有喜怒哀乐
}
//将 Person 类中需共享的方法放到 prototype 中，实现复用
Person.prototype.eat = function () {
  console.log('吃吃喝喝');
}
Person.prototype.sleep = function () {
  console.log('睡觉');
}
Person.prototype.run = function () {
  console.log('快跑');
}
//子类：学生，继承了“人”这个类
function Student(studentID) {
  this.studentID = studentID;
  Person.call(this);
}

Student.prototype = new Person();  //此时 Student.prototype 中的 constructor 被重写了，会导致 stu1.constructor === Person
Student.prototype.constructor = Student;  //将 Student 原型对象的 constructor 指针重新指向 Student 本身

var stu1 = new Student(1001);
console.log(stu1.emotion); //['喜', '怒', '哀', '乐']

stu1.emotion.push('愁');
console.log(stu1.emotion); //["喜", "怒", "哀", "乐", "愁"]

var stu2 = new Student(1002);
console.log(stu2.emotion); //["喜", "怒", "哀", "乐"]

stu1.eat(); //吃吃喝喝
stu2.run(); //快跑
console.log(stu1.constructor);  //Student
