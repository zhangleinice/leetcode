/**
 * 二叉树按层序遍历
 * 1. BFS,借助一个queue
 * 2. DFS
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * @param {TreeNode} root
 * @return {number[][]}
 */
// bfs
var levelOrder = function (root) {
  const res = [];
  if (!root) return res;
  const q = [root];
  while (q.length) {
    const curr_level = [];
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      curr_level.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    res.push(curr_level);
  }
  return res;
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

let x = levelOrder(tree);
console.log("x", x);
