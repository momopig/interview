// 第 50 题:(百度)实现 (5).add(3).minus(2) 功能。
Number.prototype.add = function(n) {
  return this.valueOf() + n
}
Number.prototype.minus = function(n) {
  return this.valueOf() - n
}
console.log((5).add(3).minus(2))
