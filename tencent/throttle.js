const throttle = (callback, delay, immediate) => {
  let cancelId

  // throttle执行时，其上下文与callback的上下文一致
  let context = this

  // 不能返回箭头函数，因为箭头函数无法使用arguments对象
  return function () {

    // cancelId如果存在，说明还没有完成之前，所以取消此次调用（do nothing）
    if (!cancelId) {

      // 如果是立即模式，可以马上调用一次
      immediate && callback.apply(context, arguments)
      cancelId = setTimeout(() => {


        // 一定要保留callback原来的上下文
        callback.apply(context, arguments)
        cancelId = null
      }, delay)
    }
  }
}

// 节流两秒内的函数调用
let throttleFn = throttle(function (number) {
    console.log(number)
  }, 2000
)

let count = 0

// 模拟无限连续调用
setInterval(() => {

  // 连续调用三次，只有第一次生效
  throttleFn(count++)
})

