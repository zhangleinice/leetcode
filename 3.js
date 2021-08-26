/**
 * 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */

// 滑动窗口 + hashSet, left一步步右移
var lengthOfLongestSubstring = function (s) {
  // 滑动窗口的左界右界
  let l = 0,
    r = 0;
  let len = s.length;
  let maxLen = 0;
  let window = new Set();
  while (r < len) {
    if (!window.has(s[r])) {
      window.add(s[r]);
      maxLen = Math.max(maxLen, r++ - l + 1);
    } else {
      window.delete(s[l++]);
    }
  }
  return maxLen;
};

// 滑动窗口 + hashMap， left移动到重复下标后一位，加快下标移动
var lengthOfLongestSubstring2 = function (s) {
  let l = 0,
    r = 0;
  let len = s.length;
  let maxLen = 0;
  let window = new Map();
  while (r < len) {
    // 必须重复字符的索引大于左指针，因为重复字符前的字符没法delete
    if (window.has(s[r]) && window.get(s[r]) >= l) {
      // 移动后到之前重复字符的下一位
      l = window.get(s[r]) + 1;
    } else {
      window.set(s[r], r);
      maxLen = Math.max(maxLen, r++ - l + 1);
    }
  }
  return maxLen;
};
console.log(lengthOfLongestSubstring2("abcabcbb"));

// 输入: s = "abcabcbb"
// 输出: 3
