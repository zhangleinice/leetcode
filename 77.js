/**
 * 组合
 * dfs + 回溯（无序）
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine = function (n, k) {
  let res = [];
  let subs = [];

  function dfs() {
    if (subs.length === k) {
      res.push([...subs]);
      return;
    }
    for (let i = 1; i <= n; i++) {
      // 剪枝，去掉重复的
      if (i <= subs[subs.length - 1]) continue;
      subs.push(i);
      dfs();
      // 回溯
      subs.pop(i);
    }
  }
  dfs();
  return res;
};

const x = combine(4, 2);
console.log(x);

// 输入：n = 4, k = 2
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
