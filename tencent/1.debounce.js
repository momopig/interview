/**
 * @desc 在某一个时间间隔内，多次调用，仅最后一次生效
 * @应用场景 1. input的模糊搜索； 2. 窗口的resize事件（大屏设置缩放）
 * @实现原理 借助闭包，来保存cancelId
 * @ debounce和throttle的区别：debounce最后一次生效（真正有意义的执行在最后一次）、throttle第一次生效（仅需要满足条件）
 *
 * @param {*} callback
 * @param {*} delay
 * @param {*} immediate
 * @returns
 */
const debounce = (callback, delay, immediate) => {
  const _this = this
  let cancelId

  // 必须是普通函数，否则无法读取arguments对象
  return function() {

    // cancelId存在则说明已调用setTimout但是还没有执行，所以还在时间周期内，可以清除
    cancelId && clearTimeout(cancelId)

    // 如果是立即执行模式，则一调用则执行，第一次setTimout完成实际上是执行第二次
    immediate && callback.apply(_this, arguments)

    cancelId = setTimeout(() => {
      cancelId = null
      callback.apply(_this, arguments)
    }, delay)
  }
}

const debounceFn = debounce((number) => {
  consolelog(number)
}, 2000, true)

