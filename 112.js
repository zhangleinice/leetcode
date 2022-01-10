/**
 *
 * 二叉树，路径总和
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * dfs
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let num = targetSum - root.val;
  if (!root.left && !root.rifht) {
    return num === 0;
  }
  return hasPathSum(root.left, num) || hasPathSum(root.rifht, num);
};

/**
 * bfs
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum2 = function (root, targetSum) {
  if (!root) return false;
  const queue = [root];
  const vals = [root.val];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      const val = vals.shift();
      if (!node.left && !node.rifht && val === targetSum) return true;
      if (node.left) {
        queue.push(node.left);
        vals.push(node.left.val + val);
      }
      if (node.rifht) {
        queue.push(node.rifht);
        vals.push(node.right.val + val);
      }
    }
  }
  return false;
};

// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// 输出：true
const tree = {
  val: 1,
  left: {
    val: 2,
  },
  right: {
    val: 3,
  },
};

let x = hasPathSum2(tree, 3);
console.log("x", x);
