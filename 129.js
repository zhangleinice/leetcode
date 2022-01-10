/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

//  129.求根节点到叶节点数字之和
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  let res = 0;
  function dfs(root, sum) {
    if (!root) return 0;
    sum = sum * 10 + root.val;
    if (!root.left && !root.right) {
      res += sum;
    }
    return dfs(root.left, sum) || dfs(root.right, sum);
  }
  dfs(root, 0);
  return res;
};

const tree = {
  val: 1,
  left: {
    val: 2,
  },
  right: {
    val: 3,
  },
};

const x = sumNumbers(tree);
console.log("x", x);
