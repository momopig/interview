
const co = require('co')
/**
 * @desc 方法一：while实现，真正的实现
 *
 */
const sleep_while = delay => {
  const startTime = (new Date()).getTime()
  while((new Date()).getTime() - startTime < delay);
}
const test_while = () => {
  sleep_while(2000)
  console.log('test_while')
}
test_while()

/**
 * @desc 方法二：使用setTimeout实现，在event loop中处理
 * @param {*} delay
 * @param {*} callback
 */
const sleep_timeout = (delay, callback) => {
  setTimeout(callback, delay)
}
const test_timeout = () => {
  sleep_timeout(2000, () => {
    console.log('test_timeout')
  })
}
test_timeout()

/**
 * @desc 方法三：promise实现，实际上是用setTimeout实现
 * @param {*} delay
 */
const sleep_promise = (delay) => {
  return new Promise(resolve => setTimeout(resolve, delay))
}
const test_promise = () => {
  sleep_promise(2000).then(() => {
    console.log('test_promise')
  })
}
test_promise()


/**
 * @desc 方法四：asyn/await实现，实际上是用setTimeout实现
 * @param {*} delay
 */
async function sleep_await(delay, callback) {
  await sleep_promise(delay)
  callback()
}
const test_await = () => {
  sleep_await(2000, () => {
    console.log('test_await')
  })
}
test_await()

/**
 * 方法五： sleep的generator实现
 * @param {*} delay
 * @param {*} callback
 */
function * sleep_generator (delay, callback) {
  yield sleep_promise(delay)
  callback()
}
const coWrap = co.wrap(sleep_generator)
const test_generator = () => {
  const generator = sleep_generator(2000, () => {
    console.log('test_generator')
  })

  generator.next()
  generator.next()
}
const test_generator_co = () => {
  coWrap(2000, () => {
    console.log('test_generator_co')
  })
}

test_generator()
test_generator_co()
