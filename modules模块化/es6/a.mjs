// a.js
export let a = 1
setTimeout(() => {
  console.log('a.js:', '执行')
}, 2000)

// b.js
import { a } from './a.mjs'
