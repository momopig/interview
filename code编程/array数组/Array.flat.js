// 3、编写一个函数 flatten ，传入仅包含数字的多维数组，返回拍平后的结果。
// 如：传入 [1, [2, 3]] 返回 [1, 2, 3]。
let flatten = arr => {
  const result = []
  if (!Array.isArray(arr)) return arr

  let getFlatValue = value => {
    if (!Array.isArray(value)) {
    	result.push(value)
    } else {
        value.forEach(item => {
  			getFlatValue(item)
  		})
    }
  }

  getFlatValue(arr)


  return result
}

//使用stack來實作非遞迴的展開
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // pop value from stack
    const next = stack.pop(); // 可以使用shift
    if (Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  //reverse to restore input order
  return res.reverse(); // 可以直接从队头开始
}
flatten(arr1);// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
