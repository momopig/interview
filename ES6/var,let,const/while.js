// // let i = 0
// // while(i < 10) {
// //   setTimeout(() => {
// //     console.log(i) // 连续输出10个10
// //   }, 1000)
// //   i++
// // }
//   for (var i = 0; i < 10; i++) {
//     ((i) => {
//       setTimeout(() => {
//         console.log(i) // 输出0～9
//       }, 1000)
//     })(i)
//   }

  function isSame(num) {
    let tempStr = String(num)
    let startIndex = 0
    let endIndex = tempStr.length - 1
    while(endIndex !== startIndex) {
      console.log(startIndex)
      console.log(endIndex)
      if(tempStr[startIndex] !== tempStr[endIndex]) {
        return false
      }
      endIndex--
      startIndex++
    }
    return true
  }

  function test () {
    for(let i = 11; i <= 1000; i++) {
      if (isSame(i)) {
        console.log(i)
      }
    }
  }
test()
