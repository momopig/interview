import { a } from './a.mjs'

console.log(a) // 1
setTimeout(() => {
  console.log(a) // 4秒后：2，说明基础类型也是传的引用
}, 4000)
// 如下语句执行：
// node --experimental-modules b.mjs
