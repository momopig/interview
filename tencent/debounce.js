const debounce = (callback, delay, immediate) => {
  const context = this
  let cancelId

  // 必须是普通函数，否则无法读取arguments对象
  return function() {

    // cancelId存在则说明已调用setTimout但是还没有执行，所以还在时间周期内，可以清除
    cancelId && clearTimeout(cancelId)

    // 如果是立即执行模式，则一调用则执行，第一次setTimout完成实际上是执行第二次
    immediate && callback.apply(context, arguments)

    cancelId = setTimeout(() => {
      cancelId = null
      callback.apply(context, arguments)
    }, delay)
  }
}

const debounceFn = debounce((number) => {
  consolelog(number)
}, 2000, true)

se
