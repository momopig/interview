/**
 * @desc 去重，并找出所有排列，要求不改变其相对位置
 */
const dataStr = 'abceae' // [ 'abce', 'bcea', 'bcae' ]
const dataStr = 'aab' // [ 'ab']
const dataStr = 'aaba' // [ 'ab']
const getData = (s) => {
  const stack = []
  const results = []
  const maxLength = new Set(dataStr).size
  const dropSame = (i) => {
    let hasIn = false
    if (i >= s.length) return
    if (!stack.includes(s[i])) {
      stack.push(s[i])
      hasIn = true
    }
    if (stack.length === maxLength) {
      let value = stack.join('')
      if (!results.includes(value)) {
        results.push(value)
      }
      hasIn && stack.pop()
      return
    }

    // 对孩子结点进行去重(实际上是对兄弟结点)
    for (let j = i + 1, lj = s.length; j < lj; j++) {
      dropSame(j)
    }
    hasIn && stack.pop()
  }
  for (let i = 0, li = s.length; i < li; i++) {
    dropSame(i)
  }
  return results
}
console.log(getData(dataStr))
