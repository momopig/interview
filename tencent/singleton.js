const getSingleton = (function() {

  let instance = null

  // 延迟实例化
  return () => instance || (instance = {})
})()

// 通过闭包函数来获取单例对象
let instance1 = getSingleton()
let instance2 = getSingleton()
console.log(instance1 === instance2)
