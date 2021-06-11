
// 先序
const preOrder_loop = root => {
  const stack = []
  while(root || stack.length) {
    if (root) {
      visit(root.val)

      // 向子树迭代前，都要先把父结点入栈
      stack.push(root)
      root = root.left
    } else {
     root = stack.pop()
     root = root.right
    }
  }

}

// 中序
const inOrder_loop = root => {
  const stack = []
  while(root || stack.length) {
    if (root) {

      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      visit(root.val)
      root = root.right
    }
  }
}

// 后序
const postOrder_loop = root => {
  const stack = []
  const reverseStack = []
  while(root || stack.length) {
    if (root) {

      // 按照根->右->左的顺序入栈，然后出栈时就是左->右->根
      reverseStack.push(root)

      // 向子树迭代前，都要先把父结点入栈
      stack.push(root)
      root = root.right
    } else {
      root = stack.pop()
      root = root.left
    }
  }
  while(reverseStack.length) {
    let top =  reverseStack.pop()
    visit(top.val)
  }

}


