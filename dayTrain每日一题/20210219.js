// 编程题：分割回文字符串
// 给定一个字符串 s，将* s *分割成一些子串，使每个子串都是回文串。返回 s 所有可能的分割方案。
// 输入: "aab";
// 输出: [
//   ["aa", "b"],
//   ["a", "a", "b"],
// ];
// 参考：https://mp.weixin.qq.com/s/aBv_wGVX1aKDBLf_ERtQIA
const isSame = str => {
  return str.split('').reverse().join('') === str
}
const fn1 = originStr => {
  const results = []
  const back = (start, result) => {
    if (start === originStr.length) { // start已经越界了
      results.push(result)
      return
    }
    for (let i = start; i < originStr.length; i++) {

      let tempStr = originStr.slice(start, i + 1)
      if (isSame(tempStr)) {
        back(i + 1, result.concat(tempStr))
      }
    }

  }
  back(0, [])

  return results
}
console.log(fn1('aab')) // [ [ 'a', 'a', 'b' ], [ 'aa', 'b' ] ]
console.log(fn1('a')) // [ [ 'a' ] ]
console.log(fn1('aba')) // [ [ 'a', 'b', 'a' ], [ 'aba' ] ]
console.log(fn1('abcb')) // [ [ 'a', 'b', 'c', 'b' ], [ 'a', 'bcb' ] ]
