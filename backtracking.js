/**
 * 46.全排列
 * 抽象成一棵树，dfs + 回溯（有序）
 * @param {number[]} nums
 * @return {number[][]}
 */
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

var permute = function (nums) {
  const res = [];
  const set = new Set();
  function dfs() {
    if (set.size === nums.length) {
      return res.push([...set]);
    }
    for (let num of nums) {
      if (set.has(num)) continue;
      set.add(num);
      dfs();
      // 回溯
      set.delete(num);
    }
  }
  dfs();
  return res;
};

/**
 * 77.组合
 * dfs + 回溯（无序）
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
//  给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
//  输入：n = 4, k = 2
//  输出：
//  [
//    [2,4],
//    [3,4],
//    [2,3],
//    [1,2],
//    [1,3],
//    [1,4],
//  ]

var combine = function (n, k) {
  const res = [];
  const set = [];
  function dfs() {
    if (set.length === k) {
      return res.push(set);
    }
    for (let val = 1; i <= n; val++) {
      if (val <= set[set.length - 1]) continue;
      set.add(val);
      dfs();
      // 回溯
      set.pop(val);
    }
  }
  dfs();
  return res;
};

/**
 * 电商sku全排列
 * dfs里加一个index记录每个属性数组
 */

let names = ["iPhone X", "iPhone XS"];
let colors = ["黑色", "白色"];
let storages = ["64g", "256g"];
// 输出
// [
//         ["iPhone X", "黑色", "64g"],
//         ["iPhone X", "黑色", "256g"],
//         ["iPhone X", "白色", "64g"],
//         ["iPhone X", "白色", "256g"],
//         ["iPhone XS", "黑色", "64g"],
//         ["iPhone XS", "黑色", "256g"],
//         ["iPhone XS", "白色", "64g"],
//         ["iPhone XS", "白色", "256g"]
//   ]
function sku(...args) {
  const res = [];
  const set = new Set();
  function dfs(index) {
    const list = args[index];
    if (set.size === args.length) {
      return res.push([...set]);
    }
    for (let val of list) {
      if (set.has(val)) continue;
      set.add(val);
      dfs(index + 1);
      set.delete(val);
    }
  }
  dfs(0);
  return res;
}

const x = sku(names, colors, storages);
console.log(x);
