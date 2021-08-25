/**
 * 最优：逆向双指针
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 拼接，排序
var merge = function (nums1, m, nums2, n) {
  return nums1
    .slice(0, m)
    .concat(nums2)
    .sort((a, b) => a - b);
};
// 正向双指针，时间 O(m+n),空间 O(m)
var merge2 = function (nums1, m, nums2, n) {
  let i = 0,
    j = 0,
    k = 0;
  let nums = [];
  // 从前往后，小的值赋值到nums前面里，指针后移
  while (i < m && j < n) {
    if (nums1[i] > nums2[j]) {
      nums[k++] = nums2[j++];
    } else {
      nums[k++] = nums1[i++];
    }
  }
  // 当短的数组用完了，长数组直接放进nums
  while (i < m) {
    nums[k++] = nums1[i++];
  }
  while (j < n) {
    nums[k++] = nums2[j++];
  }
  return nums;
};

// 逆向双指针  时间 O(m+n), 空间 O(1)
var merge3 = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;
  // 从后往前，大的值赋值到nums后面，指针前移
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
  // 短数组比较完了，就直接放进nums1前面
  while (i >= 0) {
    nums1[k--] = nums1[i--];
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
  return nums1;
};

const n1 = [1, 2, 3, 0, 0, 0];
const n2 = [2, 5, 6];
console.log(merge3(n1, 3, n2, 3));

// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 解释：需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
