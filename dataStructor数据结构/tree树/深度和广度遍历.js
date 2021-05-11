var root = {
  name: "0",
  children: [
    {
      name: "0-0",
      children: [
        {
          name: "0-0-0"
        },
        {
          name: "0-0-1"
        }
      ]
    },
    {
      name: "0-1"
    },
    {
      name: "0-2",
      children: [
        {
          name: "0-2-0"
        },
        {
          name: "0-2-1"
        }
      ]
    }
  ]
};
const deepTrace = (tree) => {
  if (tree) {
    tree.visited = true;
    console.log(tree.name);
  }
  if (!Array.isArray(tree.children)) return;
  for (let child of tree.children) {
    deepTrace(child);
  }
};

// 需要考虑循环引用的情况
const layerTrace = (tree) => {
  let traceQueue = [tree];

  while (traceQueue.length) {
    let node = traceQueue.shift();

    if (!node.visited) {
      node.visited = true;
      console.log(node.name);

      if (Array.isArray(node.children)) {
        traceQueue = [...traceQueue, ...node.children]
        // traceQueue = traceQueue.concat(node.children);
      }
    }
  }
};
console.log("deep trace");
deepTrace(root);
console.log("layer trace");
layerTrace(root);
