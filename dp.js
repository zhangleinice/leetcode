/**
 * 70.爬楼梯
 * 1. 动态规划
 * 2. 回溯
 * @param {number} n
 * @return {number}
 */

// 递推方程: f(n) = f(n-1) + f(n-2)
// f(0) = 1，f(1) = 1, f(2) = 2
var climbStairs = function (n) {
  const dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// 滚动数组思想,优化空间复杂度
//  0, 0, 1  ==> 0,1,1  ==> 1,1,2
var climbStairs2 = function (n) {
  let p = 0,
    q = 0,
    r = 1;
  for (let i = 0; i < n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};

let num = climbStairs2(3);
console.log(num);

/**
 * 53.最大连续子序和
 * @param {number[]} nums
 * @return {number}
 */

//  输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
//  输出：6
//  解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

// 转移方程  f(i) = Math.max(f(i - 1) + f(i), f(i))

// nums = [-2,1,-3,4,-1,2,1,-5,4]
// max  = [-2,1,-2,4, 3,5,6, 1,5]
var maxSubArray = function (nums) {
  let sum = [];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max + nums[i], nums[i]);
    sum.push(max);
  }
  return Math.max(...sum);
};

// 优化空间复杂度
var maxSubArray2 = function (nums) {
  let pre = nums[0],
    max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i]);
    max = Math.max(pre, max);
  }
  return max;
};

const x = maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(x);
