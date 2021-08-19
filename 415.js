/**
 * 两个大数相加
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let l1 = num1.length - 1,
    l2 = num2.length - 1,
    add = 0;
  const res = [];
  // 补零
  num1 = l1 > l2 ? num1 : new Array(l2 - l1).fill(0).join("") + num1;
  num2 = l1 > l2 ? new Array(l1 - l2).fill(0).join("") + num2 : num2;
  console.log(num1);
  console.log(num2);
  while (l1 >= 0 || l2 >= 0) {
    let result = num1.charAt(l1) - 0 + (num2.charAt(l2) - 0) + add;
    res.push(result % 10);
    add = Math.floor(result / 10);
    --l1;
    --l2;
  }
  return res.reverse().join("");
};

const x = addStrings("11", "123");
console.log("x", x);
