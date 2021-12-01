// bfs
function maxDepth(root) {
  if (!root) return 0;
  let queue = [root];
  let max = 0;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    max++;
  }
  return max;
}
function getElementById(wapper, id) {
  if (!wapper) return null;
  const queue = [wapper];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node.id === id) {
        return node;
      }
      if (node.children) queue.push(...node.children);
    }
  }
}
