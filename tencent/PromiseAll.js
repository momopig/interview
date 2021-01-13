// 覆盖默认的All
Promise.all = promises => {
  const results = []
  return new Promise((reslove, reject) => {
    let resultHandler = function(index, value) {
      // results[index] = value 会有问题，结果为[<1 empty item>, 2]
      results.splice(index, 0, value)
      if (results.length === promises.length) {
        reslove(results)
      }
    }

    promises.forEach((promise, index) => {
      promise.then(resultHandler.bind(this, index), resultHandler.bind(this, index))
      // promise.then(value => resultHandler(index, value), error => resultHandler(index, error))
    })
  })
}
const p1 = new Promise(reslove => {
  setTimeout(() => {
    reslove(1)
  }, 3000)
})
const p2 = new Promise(reslove => {
  setTimeout(() => {
    reslove(2)
  }, 1000)
})
const p3 = new Promise((reslove, reject) => {
  setTimeout(() => {
    reject('error 3')
  }, 1000)
})

const all = Promise.all([p1, p2, p3])
all.then(value => {
  console.log(value)
})
