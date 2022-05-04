/**
 * Famous stack problem
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const arr = [];
  const ref = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  for (var char of s.split("")) {
    if (/[\{\[\(]/.test(char)) {
      arr.push(char);
    } else {
      if (arr[arr.length - 1] !== ref[char]) return false;
      else {
        arr.pop();
      }
    }
  }
  if (arr.length !== 0) return false;
  return true;
};
