/**
 * 判断一个整数是否是回文数
 * @param {number} x
 * @return {boolean}
 *
 * 1. 转换成字符串反转比较
 * 2. 数字反转比较，只需要反转一半
 */
const isPalindrome = function (x) {
  if (x < 0) return false;
  const s = String(x);
  const y = s.split("").reverse().join("");
  return s === y;
};

// 优化
const isPalindrome2 = function (x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false;
  let reverseNum = 0;
  while (x > reverseNum) {
    reverseNum = (x % 10) + reverseNum * 10;
    x = Math.floor(x / 10);
  }
  return x === reverseNum || x === Math.floor(reverseNum / 10);
};
