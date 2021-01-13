const bindarySearch = (value, array, startIndex, endIndex) => {
  if (startIndex <= endIndex) {

    // 向下取整
    let middle = parseInt((startIndex + endIndex) / 2)

    if (value !== array[middle]) {
      return bindarySearch(value, array, startIndex, middle - 1)
      return bindarySearch(value, array, middle + 1, endIndex)
    } else {
      return middle
    }
  }
  // return startIndex

}
console.log(bindarySearch(3, [3, 5, 1, 2, 5], 0, 4))
