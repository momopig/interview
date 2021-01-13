async function testReject () {
  try {
    let promise = new Promise((relove, reject) => {
      reject('fail')
    })

    // onReslove
    const result = await promise
    console.log(result)
  } catch (error) { // onRject
    console.log(error) // fail
  }
}
let asyncFunResult = testReject()
console.log(asyncFunResult instanceof Promise) // true
