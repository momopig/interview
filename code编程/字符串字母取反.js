const method1 = (str) => {
  debugger
  const strArr = str.split('')
  console.log('d')
  let newStrArr = strArr.map((char) => {
    if (char.toLowerCase() === char) {
      return char.toUpperCase()
    } else {
      return char.toLowerCase()
    }
  })
  return newStrArr.join('')
}
console.log(method1('Abc')) // aBC
