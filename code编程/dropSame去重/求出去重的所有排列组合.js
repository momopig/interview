
const fn = data => {
  const results = []
  const set = new Set(data)

  const back = (result, start) => {
    if (start === data.length
      && set.size  === result.length
      && !results.includes(result)
    ) {
      results.push(result)
      return
    }
    for(let i = start; i < data.length; i++) {
      if (!result.includes(data[i])) {
        back(result.concat(data[i]), i + 1)
      } else {
        back(result, i + 1)
      }
    }
  }
  back('', 0)
  // console.log(results)
  return results
}
console.log(fn('bcabc')) // [ 'bca', 'bac', 'cab', 'abc' ]
console.log(fn('abacb')) // [ 'abc', 'acb', 'bac' ]
console.log(fn('cbacdcbc')) //

// AES
