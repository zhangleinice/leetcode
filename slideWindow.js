/**
 * 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
//  输入: s = "abcabcbb"
//  输出: 3

// 滑动窗口 + hashSet, left一步步右移
var lengthOfLongestSubstring = function (s) {
  let l = 0,
    r = 0,
    window = new Set(),
    maxLen = 0;
  while (r < s.length) {
    if (window.has(s[r])) {
      window.delete(s[l++]);
    } else {
      window.add(s[r]);
      maxLen = Math.max(maxLen, r++ - l + 1);
    }
  }
  return maxLen;
};

// 滑动窗口 + hashMap + 跳针优化
var lengthOfLongestSubstring = function (s) {
  let l = 0,
    r = 0,
    window = new Map(),
    maxLen = 0;
  while (r < s.length) {
    if (window.has(s[r]) && window.get(s[r]) >= l) {
      l = window.get(s[r]) + 1;
    } else {
      window.set(s[r], r);
      maxLen = maxLen = Math.max(maxLen, r++ - l + 1);
    }
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
