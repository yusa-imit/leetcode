/**
 * Implementation Prob
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let str = s.split("");
  const avails = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  let answer = 0;
  for (var letter of Object.keys(avails)) {
    const firstLetter = str.lastIndexOf(letter);
    if (firstLetter === -1) continue;
    let current = str.splice(0, firstLetter + 1);
    for (var l of current) {
      if (l === letter) answer += avails[l];
      else answer -= avails[l];
    }
  }
  return answer;
};
