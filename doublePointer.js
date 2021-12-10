/**
 * 比较版本号
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
//  输入：version1 = "1.01", version2 = "1.001"
//  输出：0
//  解释：忽略前导零，"01" 和 "001" 都表示相同的整数 "1"

// 1.切割数组，空间 O(m + n)
var compareVersion = function (version1, version2) {
  const v1 = version1.split(".");
  const v2 = version2.split(".");
  // 注意循环次数为长的数组
  const n = Math.max(version1.length, version2.length);
  for (let i = 0; i < n; i++) {
    const x = v1[i] === undefined ? 0 : parseInt(v1[i]);
    const y = v2[i] === undefined ? 0 : parseInt(v2[i]);
    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    }
  }
  return 0;
};

// 2.双指针移动,空间 O(1)
var compareVersion = function (version1, version2) {
  let p = 0,
    q = 0;

  function getChunkIndex(str, idx) {
    if (str[idx] !== "." && idx < str.length) {
      idx++;
    }
    return idx;
  }
  while (p < version1.length && q < version2.length) {
    const v1_idx = getChunkIndex(version1, p);
    const v2_idx = getChunkIndex(version2, q);
    const str1 = +version1.slice(p, v1_idx);
    const str2 = +version1.slice(q, v2_idx);
    if (str1 > str2) {
      return 1;
    } else if (str1 < str2) {
      return -1;
    }
    p = p + v1_idx;
    q = q + v2_idx;
  }
  while (p < version1.length) {
    const v1_idx = getChunkIndex(version1, p);
    const str1 = +version1.slice(p, v1_idx);
    if (str1 > 0) {
      return 1;
    } else if (str1 < 0) {
      return -1;
    }
    p = p + v1_idx;
  }
  while (q < version2.length) {
    const v2_idx = getChunkIndex(version2, q);
    const str2 = +version1.slice(q, v2_idx);
    if (str2 > 0) {
      return -1;
    } else if (str1 < 0) {
      return 1;
    }
    q = q + v2_idx;
  }
  return 0;
};

/**
 * @param {number} c
 * @return {boolean}
 */

//  输入：c = 5
//  输出：true
//  解释：1 * 1 + 2 * 2 = 5
var judgeSquareSum = function (c) {
  let a = 0,
    b = ~~Math.sqrt(c);
  while (a <= b) {
    let num = a * a + b * b;
    if (num > c) {
      b--;
    } else if (num < c) {
      a++;
    } else {
      return true;
    }
  }
  return false;
};

/**
 * 88.合并两个有序数组
 * @  {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 解释：需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。

var merge = function (nums1, m, nums2, n) {
  let p = m - 1;
  let q = n - 1;
  let x = m + n - 1;
  while (q >= 0 && p >= 0) {
    if (nums2[q] >= nums1[p]) {
      nums1[x--] = nums2[q--];
    } else {
      nums1[x--] = nums1[p--];
    }
  }
  // 当nums1移动完毕，nums2依次放入nums1
  while (q >= 0) {
    nums1[x--] = nums2[q--];
  }
  return nums1;
};

const n1 = [1, 2, 3, 0, 0, 0];
const n2 = [2, 5, 6];
console.log(merge(n1, 3, n2, 3));
