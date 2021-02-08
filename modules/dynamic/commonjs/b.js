let { a } = require('./a.js')
console.log(a) // 1
setTimeout(() => {
  console.log(a) // 4秒后：2，说明基础类型也是传的引用
}, 4000)
