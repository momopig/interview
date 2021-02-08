/**
 *
 * 面试题， 实现一个Event类（发布订阅模式）
 * https://zhuanlan.zhihu.com/p/60324936
 */
class Event {
  constructor() {
    this.events = {} // {click: [handler1, handler2}
  }
  on(type, callback) {
    if (this.events[type]) {
      this.events[type].push(callback)
    } else {
      this.events[type] = [callback]
    }
    return this
  }
  off(type, callback) {
    if (this.events[type]) {
      let index = this.events[type].indexOf(callback)
      if (index !== -1) {
        this.events[type].splice(index, 1)
      }
    }
    return this
  }
  trigger(type, data) {
    if (this.events[type]) {
      this.events[type].forEach(callback => {
        callback(data)
      })
    }
    return this
  }
}

const event = new Event()
const fn1 = (data) => {
  console.log('fn1', data)
}
const fn2 = (data) => {
  console.log('fn2', data)
}
event.on('click', fn1)
event.on('click', fn2)
event.trigger('click', 'hello')
