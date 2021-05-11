const throttle = (fn, delay, immediate) => {
  let cancelId
  let lastCall
  const context = this
  return function() {
    if(!cancelId) {
      immediate && fn.apply(context, arguments)
      cancelId = setTimeout(() => {
        cancelId = null
        lastCall && lastCall.apply(context,arguments)
      }, delay)
    } else {
      lastCall = fn
    }
  }
}
