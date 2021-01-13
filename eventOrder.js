setTimeout(()=>{
  console.log('timer1')
  Promise.resolve().then(function() {
      console.log('promise1')
  })
}, 0)
setTimeout(()=>{
  console.log('timer2')
  Promise.resolve().then(function() {
      console.log('promise2')
  })
}, 0)


setTimeout(()=>{
  console.log('timer1')
  new Promise(resolve => {
    setTimeout(() => {
      console.log('promise1')
    }, 2000)
  })
}, 0)
setTimeout(()=>{
  console.log('timer2')
  Promise.resolve().then(function() {
      console.log('promise2')
  })
}, 0)
