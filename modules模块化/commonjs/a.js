// a.js
exports.a = 1
setTimeout(() => {
  console.log('a.js:', '执行')
})

// b.js
const { a } = require('./a.js')
