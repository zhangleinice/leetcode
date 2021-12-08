/**
 * @param {number} c
 * @return {boolean}
 */

//  输入：c = 5
//  输出：true
//  解释：1 * 1 + 2 * 2 = 5

// 双指针
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

var judgeSquareSum = function (c) {
  for (let a = 0; a * a < c; a++) {
    const b = Math.sqrt(c - a * a);
    if (b === parseInt(b)) {
      return true;
    }
  }
  return false;
};

const x = judgeSquareSum(2);
console.log("x", x);
