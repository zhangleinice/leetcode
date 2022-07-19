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
  // 先排序
  nums.sort((x, y) => x - y);
  // 添加访问记录，类似图的遍历，避免重复
  const visited = new Array(nums.length).fill(false);
  function dfs() {
    if (arr.length === nums.length) {
      res.push(arr.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      // 访问过的跳过； 和前一个相等的跳过 && 前一个未访问的跳过
      if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]))
        continue;
      arr.push(nums[i]);
      visited[i] = true;
      dfs();
      visited[i] = false;
      // 回溯
      arr.pop();
    }
  }

  dfs();
  return res;
};

// !这个方案是错的，还是得先排序
// 不用排序，第一个值为重复的跳过
var permuteUnique2 = function (nums) {
  const res = [];
  const arr = [];
  const vis = new Array(nums.length).fill(false);
  function dfs() {
    if (arr.length === nums.length) {
      res.push(arr.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      // 走过的跳过；第一个节点为重复的也直接跳过
      if (vis[i] || (i > 0 && arr.slice().includes(nums[i]))) continue;
      arr.push(nums[i]);
      vis[i] = true;
      dfs();
      vis[i] = false;
      // 回溯
      arr.pop();
    }
  }
  dfs();
  return res;
};

const x = permuteUnique([1, 1, 2]);
console.log("x", x);
