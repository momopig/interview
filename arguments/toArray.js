function toArray1() {

  // 转换为数组类型
  const args = Array.prototype.slice.call(arguments)
  console.log(args)
}
toArray1(1,2,3,4)

function toArray2() {

  // 转换为数组类型
  const args = [...arguments]
  console.log(args)
}
toArray2(1,2,3,4)


function toArray3() {

  // 转换为数组类型
  const args = Array.from(arguments)
  console.log(args)
}
toArray3(1,2,3,4)
