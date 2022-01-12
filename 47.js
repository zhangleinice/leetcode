// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

/**
 * 47. 全排列 II
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = [];
  const arr = [];
  const vis = new Array(nums.length).fill(false);
  function dfs(idx) {
    if (idx === nums.length) {
      res.push(arr.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) continue;
      arr.push(nums[i]);
      vis[i] = true;
      dfs(idx + 1);
      vis[i] = false;
      // 回溯
      arr.pop();
    }
  }
  nums.sort((x, y) => x - y);
  dfs(0);
  return res;
};

const x = permuteUnique([1, 1, 2]);
console.log("x", x);
