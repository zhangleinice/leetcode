/**
 * 求一个数的平方根
 * 1. 二分法
 * 2. 牛顿迭代法
 * @param {number} x
 * @return {number}
 */

// 整数
var mySqrt = function (x) {
  if (x === 0 || x === 1) return x;
  let [left, right] = [1, x];
  while (left <= right) {
    let mid = left + Math.floor((right - left) >> 1);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return Math.floor(right);
};

// 保留6位小数
var mySqrt2 = function (x) {
  let [left, right] = [0, x];
  let mid = x / 2;
  while (Math.abs(mid * mid - x) > 0.000001) {
    if (mid * mid > x) {
      right = mid;
    } else {
      left = mid;
    }
    mid = left + (right - left) / 2;
  }
  return mid;
};

// 牛顿迭代法
// Xn+1 = Xn - f(Xn)/f'(Xn) = Xn - (Xn^2 - y)/2Xn = (Xn + y/Xn)/2
var mySqrt3 = function (x) {
  let r = x;
  while (r * r > x) {
    r = (r + x / r) / 2;
  }
  return r;
};
console.log(mySqrt2(8));
