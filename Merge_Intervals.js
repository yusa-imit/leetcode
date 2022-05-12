/**
 * Sorting Arrays
 * O(n)
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let answer = [];
  let cur = -1;
  for (var interval of intervals) {
    if (cur >= interval[0]) {
      var re = answer.pop();
      re[1] = Math.max(re[1], interval[1]);
      answer.push(re);
      cur = re[1];
    } else {
      answer.push([interval[0], interval[1]]);
      cur = interval[1];
    }
  }
  return answer;
};
