Array.prototype.newFlat = function (level = 1) {
  const result = []

  // 输入参数level，表示子元素扁平化一层，在递归函数中，this本身也需要被扁平化处理，所以 + 1
  level++
  const spread = (arr, level) => {
    if (Array.isArray(arr) && (level > 0 || level === Infinity)) {
      arr.forEach(item => spread(item, level - 1))
    } else {
      result.push(arr)
    }
  }
  spread(this, level)
  console.log(result)
  return result
};
([1, 3, 4, [5, 6]]).newFlat();
([[3, 4], [5, 6, [6, 8]]]).newFlat(Infinity);
([[1, 2], [3, 4, [5, 6]]]).newFlat();



