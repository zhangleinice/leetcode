/**
 * @param {number} n
 * @return {string[]}
 */

// 显示回溯
var generateParenthesis2 = function (n) {
  const res = [];

  function dfs(l, r, str) {
    if (str.length === n * 2) {
      res.push(str);
      return;
    }
    // 先选左括号
    if (l > 0) {
      dfs(l - 1, r, (str += "("));
      str = str.slice(0, -1);
    }
    // 选右括号
    if (l < r) {
      dfs(l, r - 1, (str += ")"));
      str = str.slice(0, -1);
    }
  }
  dfs(n, n, "");

  return res;
};

var generateParenthesis3 = function (n) {
  const res = [];

  let str = "";
  function dfs(l, r) {
    if (str.length === n * 2) {
      res.push(str);
      return;
    }
    // 先选左括号
    if (l > 0) {
      str += "(";
      dfs(l - 1, r);
      str = str.slice(0, -1);
    }
    // 选右括号
    if (l < r) {
      str += ")";
      dfs(l, r - 1);
      str = str.slice(0, -1);
    }
  }
  dfs(n, n);

  return res;
};

// 注意str字符串的隐式回溯
var generateParenthesis = function (n) {
  const res = [];

  //   debugger;
  function dfs(l, r, str) {
    if (str.length === n * 2) {
      res.push(str);
      return;
    }
    // 先选左括号
    if (l > 0) {
      // str隐式回溯
      dfs(l - 1, r, str + "(");
    }
    // 选右括号
    if (l < r) {
      dfs(l, r - 1, str + ")");
    }
  }
  dfs(n, n, "");

  return res;
};

const a = generateParenthesis3(3);
console.log("a", a);
