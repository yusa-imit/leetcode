/**
 * implementation
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let answer = [];
  if (digits.length === 0) return answer;
  const phone = [
    [],
    [],
    "abc".split(""),
    "def".split(""),
    "ghi".split(""),
    "jkl".split(""),
    "mno".split(""),
    "pqrs".split(""),
    "tuv".split(""),
    "wxyz".split(""),
  ];
  const digit = Array.from(digits.split(""), (v) => Number(v));
  const idx = new Array(digits.length).fill(0);
  while (true) {
    let str = "";
    for (var i = 0; i < idx.length; i++) {
      str += phone[digit[i]][idx[i]];
    }
    answer.push(str);
    idx[idx.length - 1]++;
    for (var i = idx.length - 1; i >= 1; i--) {
      if (idx[i] === phone[digit[i]].length) {
        idx[i] = 0;
        idx[i - 1] = idx[i - 1] + 1;
      }
    }
    console.log(idx);
    if (idx[0] === phone[digit[0]].length) {
      break;
    }
  }
  return answer;
};
