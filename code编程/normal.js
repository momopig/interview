// 1. 实现一个 normalize 函数，能将输入的特定的字符串转化为特定的结构化数据。
// 字符串仅由小写字母和[,]组成，且字符串不会包含多余的空格。
// 示例一: 'abc' --> {value: 'abc'}
// 示例二：'[abc[bcd[defnn]]]' -> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}

const normalize = (str) => {

  // 将[abc[xxx]]结构调整为abc[xxx]，方便递归统一处理
  if(str[0] === '[' && str[str.length - 1] === ']') {
    str = str.slice(1, -1)
  }
  const getObj = str => {
    let start = str.indexOf('[')
    let value = {}
    if (start !== -1) {
      value.value = str.slice(0, start)
      value.childen = getObj(str.slice(start + 1, -1))
    } else {
      value.value = str.slice(0)
    }
    return value
  }
  return getObj(str)
}
console.log(normalize('abc'))
console.log(normalize('[abc]'))
console.log(normalize('[abc[bcd[defnn]]]'))
