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

// 先排序，第一个值为重复的跳过
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
      // !vis[i - 1]第一个重复的
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

// !这个方案是错的，还是得先排序
// 不用排序，第一个值为重复的跳过
var permuteUnique2 = function (nums) {
  const res = [];
  const arr = [];
  const vis = new Array(nums.length).fill(false);
  function dfs(idx) {
    if (idx === nums.length) {
      res.push(arr.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      // 走过的跳过；第一个节点为重复的也直接跳过
      if (vis[i] || (i > 0 && arr.slice().includes(nums[i]))) continue;
      arr.push(nums[i]);
      vis[i] = true;
      dfs(idx + 1);
      vis[i] = false;
      // 回溯
      arr.pop();
    }
  }
  dfs(0);
  return res;
};

const x = permuteUnique([1, 1, 2]);
console.log("x", x);
