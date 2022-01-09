var binarySearch = function (nums, target) {
  let [start, end] = [0, nums.length - 1];
  while (start <= end) {
    let mid = start + ((end - start) >> 1);
    if (target === nums[mid]) return mid;
    if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

let a = [1, 2, 3, 4, 4, 4, 5, 6, 7];
// 查找第一个等于target的数
function getFirstTarget(nums, target) {}

console.log(binarySearch([1, 2, 4, 5, 7], 7));

// 输入: s = "abcabcbb" 'baca'
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

/**
 * @param {string} s
 * @return {number}
 * 双指针
 * set
 * map
 */
var lengthOfLongestSubstring = function (s) {
  let window = new Set();
  let l = 0,
    r = 0,
    len = s.length,
    maxLen = 0;
  while (r < len) {
    if (window.has(s[r])) {
      window.delete(s[l++]);
    } else {
      window.add(s[r]);
      maxLen = Math.max(maxLen, r++ - l + 1);
    }
  }
  return maxLen;
};

var lengthOfLongestSubstring2 = function (s) {
  let window = new Map();
  let l = 0,
    r = 0,
    len = s.length,
    maxLen = 0;
  while (r < len) {
    // 重复的值未删除，重复值必须大于 l
    if (window.has(s[r])) {
      l = window.get(s[r]) + 1;
      window.delete(s[r]);
    } else {
      window.set(s[r], r);
      maxLen = Math.max(maxLen, r++ - l + 1);
    }
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring2("abcabcbb"));
