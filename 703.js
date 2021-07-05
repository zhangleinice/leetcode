/**
 * 数据流中第k大元素
 * 原理：优先队列，队列长度为k，队头最小
 * @param {number} k
 * @param {number[]} nums
 *
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
var KthLargest = function (k, nums) {
  this.kQueue = nums.slice(0, k);
  this.other = nums.slice(k);
  this.min = Math.min(...this.kQueue);
  for (let i = 0; i < this.other.length; i++) {
    this.add(this.other.shift());
  }
  return this.min;
};
/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.min < val) {
    const minIndex = this.kQueue.indexOf(this.min);
    this.kQueue.splice(minIndex, 1);
    this.kQueue.push(val);
    this.min = Math.min(...this.kQueue);
  }
  return this.min;
};

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log("kthLargest", kthLargest);
console.log(kthLargest.add(3)); // return 4
console.log(kthLargest.add(5)); // return 5
console.log(kthLargest.add(10)); // return 5
console.log(kthLargest.add(9)); // return 8
