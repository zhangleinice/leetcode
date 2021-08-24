/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  return nums1
    .slice(0, m - 1)
    .concat(nums2)
    .sort((a, b) => a - b);
};
// nums1和nums2都是有序的，不用再排序
// 不能增加空间复杂度
var merge2 = function (nums1, m, nums2, n) {
  let res = [];
  nums1 = nums1.slice(0, m);
  while (nums2.length) {
    if (nums1[0] <= nums2[0]) {
      res.push(nums1.shift());
    } else {
      res.push(nums2.shift());
    }
  }
  for (let i = 0; i < res.length; i++) {
    nums1[i] = res[i];
  }
  return nums1;
};
// 优化
var merge3 = function (nums1, m, nums2, n) {
  let p = 0,
    q = 0;
  while (p <= m + n) {
    if (nums1[p] < nums2[q] && nums1[p + 1] > nums2[q]) {
      nums1.splice(p, 0, nums2.shift());
      p++;
    } else if (nums1[p + 1] < nums2[q]) {
      p++;
    } else {
      nums1.splice(p - 1, 0, nums2.shift());
    }
  }
  return nums1;
};
const n1 = [1, 2, 3, 0, 0, 0];
const n2 = [2, 5, 6];
console.log(merge2(n1, 3, n2, 3));

// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 解释：需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
