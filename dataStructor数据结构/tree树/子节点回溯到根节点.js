const rel =[
  ['A', 'B'],
  ['B', 'C'],
  ['C', 'D'],
  ['E', 'F'],
]
const map = new Map()
const createNode = (map, key) => {
  if (!map.has(key)) {
      map.set(key, {
          name: key,
          children: []
      })
  }
}
const createTree = (rel) => {
  for (let item of rel) {
      createNode(map, item[0])
      createNode(map, item[1])
      map.get(item[0]).children.push(map.get(item[1]))
      map.get(item[1]).parent = map.get(item[0])
  }
}
createTree(rel)
const findRel = nodeKey => {
  let nodeObj = map.get(nodeKey)
  const result = []
  while(nodeObj && nodeObj.parent) {
      result.push(nodeObj.parent.name)
      nodeObj = nodeObj.parent
  }
  return result
}
console.log(findRel('D')) // [ 'C', 'B', 'A' ]
console.log(findRel('C')) // [ 'B', 'A' ]
console.log(findRel('B')) // [ 'A' ]
console.log(findRel('A')) // []
