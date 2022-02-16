/**
 * 64. 最小路径和
 * @param {number[][]} grid
 * @return {number}
 */

//  输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
//  输出：7
//  解释：因为路径 1→3→1→1→1 的总和最小。

// dp[i][j] = Math.min(dp[i-1][j] + dp[i][j-1]) + grid[i][j]
var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  const dp = new Array(m).fill(0).map((x) => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j];
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      }
    }
  }

  return dp[m - 1][n - 1];
};

// 滚动数组，压缩空间
// 因为从左到右，一行一行的计算，第二行的dp可以覆盖第一行的值（比如第三行不再依赖第一行）
// https://leetcode-cn.com/problems/minimum-path-sum/solution/hui-su-dao-dong-tai-gui-hua-zai-dao-kong-swk9/
var minPathSum2 = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  const dp = new Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[j] = grid[i][j];
      } else if (i === 0) {
        dp[j] = dp[j - 1] + grid[i][j];
      } else if (j === 0) {
        dp[j] = dp[j] + grid[i][j];
      } else {
        dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
      }
    }
  }

  return dp[n - 1];
};

const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
console.log(minPathSum2(grid));
