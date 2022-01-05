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

// 优化空间复杂度
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

var climbStairs3 = function (n) {
  let p = 1,
    q = 1;
  for (let i = 1; i < n; i++) {
    // let t = p;
    // p = q;
    // q = t + q;
    [p, q] = [q, p + q];
  }
  return q;
};

let num = climbStairs3(3);
console.log(num);
