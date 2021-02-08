// 执行顺序题
const promise = new Promise((resolve, reject) => {
  console.log(1)
  resolve()
  console.log(2)
}).then(() => {
  console.log(3)
})
console.log(4)
// 1 2 4 3
