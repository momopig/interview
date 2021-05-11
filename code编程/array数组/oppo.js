const flat = array => {
  const result = []
  const getFlatData = data => {
      if(!Array.isArray(data)) {
          result.push(data)
      } else {
          for (let item of data) {
              getFlatData(item)
          }
          // data.forEach(item => getFlatData(item))
      }
  }
  getFlatData(array)
  console.log(result)
  return result
}
flat([1, 3, 4, [5, 6]])
flat([[3, 4], [5, 6, [6, 8]]])
flat([[1, 2], [3, 4]])
