/**
 * 二叉树的最小深度
 * 注意是根节点到最近叶子节点的最短路径上的节点数量
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// bfs
var minDepth = function (root) {
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
};
// dfs
var minDepth2 = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  if (root.left && !root.right) {
    return 1 + minDepth2(root.left);
  }
  if (!root.left && root.right) {
    return 1 + minDepth2(root.right);
  }
  return Math.min(minDepth2(root.left), minDepth2(root.right)) + 1;
};

const tree = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
    },
    right: {
      val: "E",
    },
  },
  right: {
    val: "C",
    right: {
      val: "F",
    },
  },
};

const x = minDepth2(tree);
console.log(x);
