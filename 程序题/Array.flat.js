// 考察了对递推和flat函数的掌握

function flat(array, level = 1) {
  const result = []
  function spread(array, level) {
    for (let item of array) {
      if (Array.isArray(item) && level > 0) {
        spread(item, level - 1)
      } else {
        result.push(item)
      }
    }
  }
  spread(array, 1)
  return result
}
console.log(flat([[1]]))
console.log(flat([[1], [[2]], [3]]))
