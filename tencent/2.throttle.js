/**
 * @desc 在某一个时间间隔内，多次调用，仅第一次生效(满足条件即可)
 * @应用场景 1. 拉下无限滚动加载：下拉滚动list，达到bottom时，仅重新fetch一次数据（追加到list尾部）
 * @记忆提示 先理解debounce，自然记住throttle，前者执行第一次，后者执行最后一次
 * @param {*} callback
 * @param {*} delay
 * @param {*} immediate
 * @returns
 */
const throttle = (callback, delay, immediate) => {
  let cancelId

  // throttle执行时，其上下文与callback的上下文一致
  let _this = this

  // 不能返回箭头函数，因为箭头函数无法使用arguments对象
  return function () {

    // cancelId如果存在，说明还没有完成之前，所以取消此次调用（do nothing）
    if (!cancelId) {

      // 如果是立即模式，可以马上调用一次
      immediate && callback.apply(_this, arguments)
      cancelId = setTimeout(() => {


        // 一定要保留callback原来的上下文
        callback.apply(_this, arguments)
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

