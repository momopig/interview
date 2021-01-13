


const getAZ = () => {
  var arr = [];

  for(var i = 65; i < 91; i++){
      arr.push(String.fromCharCode(i));
  }
  return arr
}
const chars = getAZ()
const getDepth = numer => {
  let depth = 1
  while(number <= Math.pow(26, depth)) {
    depth++
  }
  return depth--
}
const getChar = index => {
  chars[index] = Math.ceil()
}

const getSeq = (num) => {
  const strArr = []
  const depth = getDepth(num)
  let index = num - Math.pow(26, depth - 1)
  strArr.push(chars[index])
  while(Math.ceil(index / 26) !== 1) {
    strArr.push(chars[index %= 26])
    index = Math.ceil(index / 26)
  }
  console.log(strArr)
}
getSeq(1)

