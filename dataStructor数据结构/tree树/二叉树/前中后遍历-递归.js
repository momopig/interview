
// 先序
const preOrder_dfs = root => {
  if (!root) return
  visit(root.val)
  preOrder_dfs(root.left)
  preOrder_dfs(root.right)
}

// 中序
const inOrder_dfs = root => {
  if (!root) return
  inOrder_dfs(root.left)
  visit(root.val)
  inOrder_dfs(root.right)

}

// 后序
const postOrder_dfs = root => {
  if (!root) return
  postOrder_dfs(root.left)
  postOrder_dfs(root.right)
  visit(root.val)
}


