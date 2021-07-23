/**
 * 二叉树按层序遍历
 * 1. BFS
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
  const ret = [];
  if (!root) return ret;
  const q = [];
  q.push(root);
  while (q.length) {
    ret.push([]);
    // q.length必须提取出来
    const currentLevelSize = q.length;
    for (let i = 0; i < currentLevelSize; i++) {
      //   console.log("currentLevelSize", currentLevelSize);
      //   console.log("len", q.length);
      const node = q.shift();
      ret[ret.length - 1].push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }
  return ret;
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
