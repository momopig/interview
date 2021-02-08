// a.js
export let a = 1
setTimeout(() => {
  a++
  console.log(a) // 1秒后：2
}, 1000)

// b.js
import { a } from './a.mjs'

console.log(a) // 1
setTimeout(() => {
  console.log(a) // 4秒后：2，说明基础类型也是传的引用
}, 4000)

