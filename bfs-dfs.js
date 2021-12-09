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
function minDepth(root) {
  if (!root) return 0;
  const queue = [root];
  let min = 1;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (!node.left && !node.right) {
        return min;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    min++;
  }
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
  return null;
}

function levelOrder(root) {
  if (!root) return null;
  const queue = [root];
  const res = [];
  while (queue.length) {
    const len = queue.length;
    const curr_level = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node.val) curr_level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(curr_level);
  }
  return res;
}

// dfs
function maxDepth(root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

function minDepth(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  if (root.left && !root.right) {
    return 1 + minDepth2(root.left);
  }
  if (!root.left && root.right) {
    return 1 + minDepth2(root.right);
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}

function getElementById(wapper, id) {
  if (!wapper) return null;
  if (wapper.id === id) return wapper;
  for (let node of wapper.children) {
    const dom = getElementById(node, id);
    if (dom) return dom;
  }
  return null;
}

// 把节点放到对应的列表，记录每个节点深度
function levelOrder(root) {
  const res = [];
  function dep(node, depth) {
    if (!node) return;
    res[depth] = res[depth] || [];
    res[depth].push(node.val);
    dep(node.left, depth + 1);
    dep(node.right, depth + 1);
  }
  dep(root, 0);
  return res;
}
