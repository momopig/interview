// 字节
// 二叉树每个节点的value范围是1-9
// 例如：
//      1
//    2   3
//  4 5
// 从根到叶子共3条：1->2->4, 1->2->5, 1->3
// 构成的数字为124，125，13，求和124 + 125 + 13 = 262即为所求
// var root = {
//     val: 1,
//     left: {
//         val: 2,
//         left: {
//           val: 4,
//           right: null,
//           left: null,
//         },
//         right: {
//           val: 5,
//           right: null,
//           left: null,
//         },
//     },
//     right: {
//         val: 3,
//         left: null,
//         right: null,
//     }
// };

// // 实现 treeSum 方法
// // 使 treeSum(root) === 262
// var treeSum = () => {
//   // TODO
// };

var root = {
    val: 1,
    left: {
        val: 2,
        left: {
          val: 4,
          right: null,
          left: null,
        },
        right: {
          val: 5,
          right: null,
          left: null,
        },
    },
    right: {
        val: 3,
        left: null,
        right: null,
    }
};



const treeSum = (root) => {
  let treePaths = []
  const getPathTotal = (node, total = '') => {
    if (node) {
      total += node.val
    }
    if (node.left) {
      getPathTotal(node.left, total)
    }
    if (node.right) {
      getPathTotal(node.right, total)
    }
    if (!node.left && !node.right) {
      treePaths.push(total)
    }
  }
  getPathTotal(root)
  let total = treePaths.reduce((total, item) => {
    return total += Number(item)
  }, 0)
  return total
}
console.log(treeSum(root))
