/**
 * DP Problem
 * Using previous value in current calculation
 * O(N^2) in for~
 * O(1) in varification
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let left, right;
  for (var i = 0; i < s.length; i++) {
    if (s.length - i < left - right + 1) break;
    for (var j of [i, i + 1]) {
      let [l, r] = [i, j];
      while (true) {
        if (l < 0 || r > s.length - 1) break;
        if (s[l] !== s[r]) break;
        [left, right] = right - left > r - l ? [left, right] : [l, r];
        l--;
        r++;
      }
    }
  }
  return s.slice(left, right + 1);
};
