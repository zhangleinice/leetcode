/**
 * 二叉树的最大深度
 * 1.bfs
 * 2.dfs
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
var maxDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
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
};
// dfs
var maxDepth2 = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth2(root.left), maxDepth2(root.right)) + 1;
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

const x = maxDepth2(tree);
console.log(x);
