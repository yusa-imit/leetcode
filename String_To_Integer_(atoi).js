/**
 * Simple Atoi implementation
 */

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const MIN = Math.pow(2, 31) * -1;
  const MAX = Math.pow(2, 31) - 1;
  const arr = [];
  let sign = 0;
  s = s.trim();
  if (s[0] === "+" || s[0] === "-") {
    sign = s[0] === "+" ? 1 : -1;
    s = s.slice(1);
  } else {
    sign = 1;
  }
  for (var i = 0; i < s.length; i++) {
    if (!/[0-9]/.test(s[i])) {
      break;
    }
    arr.push(s[i]);
  }
  const num = Number(arr.join("")) * sign;
  if (num > MAX) return MAX;
  else if (num < MIN) return MIN;
  else return num;
};
