/**
 * String Process Prob
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let com = strs[0].split("");
  let temp = [];
  for (const str of strs) {
    temp = [];
    if (com.join("") === str) continue;
    const cur = str.split("");
    for (var i = 0; i < str.length; i++) {
      if (cur[i] === com[i]) {
        temp.push(str[i]);
        console.log(temp);
      } else {
        break;
      }
    }
    com = temp;
    if (com === []) break;
  }
  return com.join("");
};
