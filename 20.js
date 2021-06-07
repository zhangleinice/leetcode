/**
 * @param {string} s
 * @return {boolean}
 * 栈
 * 入栈 push，出栈 pop
 */
var isValid = function (s) {
  if (s % 2) return false;
  let map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  let stack = [];
  for (let key of s) {
    if (!Object.keys(map).includes(key)) {
      stack.push(key);
    } else {
      if (stack.pop() !== map[key]) {
        return false;
      }
    }
  }
  return !stack.length;
};
