var arguments = [1, 2, 3];
var arr = () => arguments[0];

arr(); // 1

function foo(n) {
  var f = () => arguments[0] + n; // 隐式绑定 foo 函数的 arguments 对象. arguments[0] 是 n,即传给foo函数的第一个参数
  return f();
}

foo(1);
foo(2);
foo(3);
foo(3,2);










//结果：
// foo(1); // 2
// foo(2); // 4
// foo(3); // 6
// foo(3,2);//6
