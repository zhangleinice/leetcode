/**
 * 学不动了
 * 5. 最长回文子串
 *
 * 中心扩散法
 * 动态规划
 */

//  输入：s = "babad"
//  输出："bab"
//  解释："aba" 同样是符合题意的答案。

var longestPalindrome = function (s) {
  let res_left = 0;
  let res_right = 0;
  let max_len = 0;
  let i = 0;
  while (i < s.length) {
    let left = i - 1;
    let right = i + 1;
    while (left > 0 && s[left] === s[i]) {
      left--;
    }
    while (right < s.length && s[right] === s[i]) {
      right++;
    }
    const end = right;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // 更新max_len
    if (max_len < right - left + 1) {
      max_len = right - left + 1;
      res_left = left + 1;
      res_right = right - 1;
    }
    // 跳过重复计算
    i = end;
    // i++;
  }
  return s.slice(res_left, res_right + 1);
};

// 如果一个字符串是回文数，那么去掉两端，中间的也是回文数
// 状态转移方程 dp[i][j] = s[i] === s[j] && dp[i+1][j-1]
var longestPalindrome2 = function (s) {
  if (s.length < 2) return s;
  let max_left = 0;
  let max_right = 0;
  let max_len = 1;
  let len = s.length;

  const dp = new Array(len).fill(0).map((i) => new Array(len).fill(false));

  for (let j = 0; j < len; j++) {
    for (let i = 0; i <= j; i++) {
      if (s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        if (j - i + 1 > max_len) {
          max_len = j - i + 1;
          max_left = i;
          max_right = j;
        }
      }
      //   if (j - i + 1 === 1) {
      //     dp[i][j] = true;
      //   }
      //   if (j - i + 1 === 2) {
      //     dp[i][j] = s[i] === s[j];
      //   }
      //   if (j - i + 1 > 2) {
      //     dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
      //   }
      //   if (j - i + 1 > max_len) {
      //     max_len = j - i + 1;
      //     max_left = i;
      //     max_right = j;
      //   }
    }
  }
  return s.slice(max_left, max_right + 1);
};

const s = "aba";
const x = longestPalindrome2(s);
console.log("x", x);
