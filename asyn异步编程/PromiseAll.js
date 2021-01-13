const promiseAll = promises => {
  const results = []
  return new Promise((reslove, reject) => {

    // 子promise的正确结果和错误结果都返回
    let resultHandler = value => {
      results[index] = value
      if (results.length === promises.length) {
        reslove(results)
      }
    }
    promises.forEach((promise, index) => {
      promise.then(resultHandler, resultHandler)
    })
  })
}
const p1 = new Promise(reslove => {
  reslove(1)
})
const all = promiseAll([p1])
all.then(value => {
  console.log(value)
})
