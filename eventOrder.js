setTimeout(()=>{
  console.log('timer1') // 1
  Promise.resolve().then(function() {
      console.log('promise1') // 2
  })
})
setTimeout(()=>{
  console.log('timer2') // 3
  Promise.resolve().then(function() {
      console.log('promise2') // 4
  })
})


setTimeout(()=>{
  console.log('timer3') // 5
  new Promise(resolve => {
    setTimeout(() => {
      console.log('promise3') // 8
    }, 2000)
  })
})
setTimeout(()=>{
  console.log('timer4') // 6
  Promise.resolve().then(function() {
      console.log('promise4') // 7
  })
})


// timer1
// promise1
// timer2
// promise2
// timer3
// timer4
// promise4
// promise3
