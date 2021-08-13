/**
 * 爬楼梯
 * @param {number} n
 * @return {number}
 */

// 要到达n级楼梯，只有两种方式，从（n-1）级 或 （n-2）级到达的。
// 递推公式 f(n) = f(n - 1) + f(n - 2)

// 递归 + 记忆
const memory = [];
var climbStairs = function (n) {
  if (n <= 2) return n;
  memory[0] = 0;
  memory[1] = 1;
  if (memory[n]) return memory[n];
  memory[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return memory[n];
};

// 动态规划
var climbStairs2 = function (n) {
  const dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// 动态数组，优化空间复杂度
var climbStairs3 = function (n) {
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

console.log(climbStairs3(3));
