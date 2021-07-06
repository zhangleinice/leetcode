/**
 * 数据流中第k大元素
 * 1. 优先队列，队列长度为k，队头最小 nlogk
 * 2.排序   nklogk
 * @param {number} k
 * @param {number[]} nums
 *
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.kQueue = nums.slice(0, k);
  const other = nums.slice(k);
  this.min = Math.min(...this.kQueue);
  for (let i = 0; i < other.length; i++) {
    this.add(other[i]);
  }
  return this.min;
};
KthLargest.prototype.add = function (val) {
  if (this.k > this.kQueue.length) {
    this.kQueue.push(val);
    this.min = Math.min(...this.kQueue);
    return this.min;
  }
  if (this.min < val) {
    const minIndex = this.kQueue.indexOf(this.min);
    this.kQueue.splice(minIndex, 1, val);
    this.min = Math.min(...this.kQueue);
  }
  return this.min;
};

var KthLargest2 = function (k, nums) {
  this.k = k;
  this.nums = nums;
  const arr = this.nums.sort((a, b) => b - a);
  return (this.kMax = arr[k - 1]);
};
/**
 * @param {number} val
 * @return {number}
 */
KthLargest2.prototype.add = function (val) {
  if (val <= this.kMax) return this.kMax;
  this.nums.push(val);
  const x = this.nums.sort((a, b) => b - a);
  return (this.kMax = x[this.k - 1]);
};

const kthLargest = new KthLargest2(3, [4, 5, 8, 2]);
console.log("kthLargest", kthLargest);
console.log(kthLargest.add(3)); // return 4
console.log(kthLargest.add(5)); // return 5
console.log(kthLargest.add(10)); // return 5
console.log(kthLargest.add(9)); // return 8
