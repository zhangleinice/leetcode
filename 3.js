/**
 * 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let str = "";
  let pre = "";
  for (let v of s) {
    if (str.indexOf(v) === -1) {
      str += v;
    } else {
      if (pre.length < str.length) {
        pre = str;
      }
      str = v;
    }
  }
  return pre.length;
};

console.log(lengthOfLongestSubstring(" "));

// 输入: s = "abcabcbb"
// 输出: 3
