var obj = {
  count : 10,
  doSomethingLater : function (){
      setTimeout(function(){ // the function executes on the window scope
          this.count++;
          console.log(this.count);
      }, 300);
  }
}
debugger
obj.doSomethingLater(); // "NaN", because the property "count" is not in the window scope.

var obj = {
  count : 10,
  doSomethingLater : function(){ // of course, arrow functions are not suited for methods
      setTimeout( () => { // since the arrow function was created within the "obj", it assumes the object's "this"
          this.count++;
          console.log(this.count);
      }, 300);
  }
}
obj.doSomethingLater(); // 11, 箭头函数的this为方法执行时的this，即obj
