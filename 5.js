/**
 * 学不动了
 * 5. 最长回文子串
 *
 * 中心扩散法
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

const s = "aba";
const x = longestPalindrome(s);
console.log("x", x);
