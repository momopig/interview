// 观察者模式
function PromiseImp(initFn) {
  this.fulfillCalbacks = []
  this.rejectCallbacks = []
  this.value = null

  // 注意，内部的reslove和Promise.reslove其实功能并不一样，是两个东西，不要当作一回事，reject和Promise.reject亦如此
  const resolve = value => {
    this.value = value
    this.fulfillCalbacks.forEach(callback => {
      this.value = callback(this.value)
    })
  }
  const reject = error => {
    this.value = error
    this.rejectCallbacks.forEach(callback => {
      this.value = callback(this.value)
    })
  }
  initFn(this.resolve, this.reject)
}
PromiseImp.prototype.then = function(onFulfill, onReject) {
  onFulfill && this.fulfillCalbacks.push(onFulfill)
  onReject && this.rejectCallbacks.push(onReject)
}

new PromiseImp((resolve, reject) => {
  setTimeout(() => resolve(1), 1000)
}).then(value => {
  console.log(value)
})
