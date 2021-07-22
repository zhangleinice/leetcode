/**
 *
 * 二叉树的前序，中序，后序遍历
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//  输入：root = ['A', 'B', 'C', 'D', 'E', null,'F']
//  输出：[A,B,D,E,C,F]
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
var preorderTraversal = function (root, res = []) {
  if (!root) return res;
  res.push(root.val);
  preorderTraversal(root.left, res);
  preorderTraversal(root.right, res);
  return res;
};

const x = preorderTraversal(tree);
console.log("x", x);
