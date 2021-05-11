// 腾讯: pcg-二面
// 给定一个仅包含小写字母的字符串，去除字符串中重复的字母，使得每个字母只出现一次。需保证返回结果的字典序最小（要求不能打乱其他字符的相对位置）。

// 示例 1:
// 输入 : "bcabc"
// 输出 : "abc"

// 示例 2:
// 输入 : "cbacdcbc"
// 输出 : "acdb"
// https://leetcode-cn.com/problems/remove-duplicate-letters/submissions/
// const fn = str => {
//   const originArr = str.split('')
//   const result = []
//   while(originArr.length !== 0) {
//     let currentChar = originArr.shift()
//     while (result.length !== 0 && result[result.length - 1] >= currentChar) {
//       if (originArr.includes(result[result.length - 1]) && result.includes(currentChar)) {
//         result.pop()
//       } else {
//         break
//       }
//     }
//     if (!result.includes(currentChar)) {
//       result.push(currentChar)
//     }
//   }
//   return result.join('')
// }

const fn = data => {
  let results = ''
  const set = new Set(data)

  const back = (result, start) => {

    // 减枝
    if (results < result && results !== '') {
      return
    }
    if (start === data.length
      && set.size  === result.length
    ) {
      results = result
      return
    }
    for(var i = start; i < data.length; i++) {
      if (!result.includes(data[i])) {
        back(result.concat(data[i]), i + 1)
      } else {
        back(result, i + 1)
      }
    }
  }
  debugger
  back('', 0)
  // console.log(results)
  return results
}
// console.log(fn('bcabc')) // abc
// console.log(fn('abacb')) // abc
// console.log(fn('cbacdcbc')) // acdb
console.log(fn('mitnlruhznjfyzmtmfnstsxwktxlboxutbic')) //

