// 飞书一面(题2)
var result = [];
var a = 3;
var total = 0;
function foo(a) {
  let i = 0;
  for (; i < 3; i++) {
    result[i] = function() {
      total += i * a;
      console.log(total);
    }
  }
}

foo(1);
result[0](); // 3
result[1](); // 6
result[2](); // 9

