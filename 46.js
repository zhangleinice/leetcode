/**
 * 全排列
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let set = new Set();

  function dfs() {
    if (set.size === nums.length) {
      res.push([...set]);
      return;
    }
    for (let val of nums) {
      if (set.has(val)) continue;
      set.add(val);
      dfs();
      // 回溯
      set.delete(val);
    }
  }
  dfs();
  return res;
};

const x = permute([1, 2, 3]);
console.log("x", x);

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]

// 输入：nums = [1]
// 输出：[[1]]
