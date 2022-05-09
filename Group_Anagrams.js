/**
 * String Processing & Hashmap
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 1) return [strs];
  var answer = [];
  var dic = {};
  let count = 0;
  for (var str of strs) {
    const chars =
      str === ""
        ? ""
        : JSON.stringify(str.split("").sort((a, b) => a.localeCompare(b)));
    if (dic[chars] === undefined) {
      dic[chars] = count;
      count++;
      answer[dic[chars]] = [str];
    } else {
      answer[dic[chars]].push(str);
    }
  }
  return answer;
};
