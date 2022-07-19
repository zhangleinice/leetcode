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
  while (l1 >= 0 || l2 >= 0) {
    let result = num1.charAt(l1) - 0 + (num2.charAt(l2) - 0) + add;
    res.push(result % 10);
    add = Math.floor(result / 10);
    --l1;
    --l2;
  }
  return res.reverse().join("");
};

var addStrings2 = function (num1, num2) {
  let add = 0;

  let list = [];

  let i = num1.length - 1;

  let j = num2.length - 1;

  while (i >= 0 || j >= 0) {
    let n1 = i >= 0 ? num1[i] : 0;
    let n2 = j >= 0 ? num2[j] : 0;

    let result = +n1 + +n2 + add;

    add = Math.floor(result / 10);

    list.unshift(result % 10);

    i--;

    j--;
  }

  if (add) list.unshift(1);

  return list.join("");
};

const x = addStrings2("111", "23");
console.log("x", x);
