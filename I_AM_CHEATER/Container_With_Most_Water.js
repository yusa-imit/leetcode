/**
 * Time complexity in worst case, O(n^2) casue elements of height arrays are all different
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const check = (l, r) => {
    return Math.min(height[l], height[r]) * (r - l);
  };
  const set = new Set([...height].sort((a, b) => b - a));
  let answer = 0;
  for (var h of set) {
    if (answer / h > height.length) break;
    const idxs = height.flatMap((v, i) => (v >= h ? i : []));
    if (idxs.length < 2) continue;
    var ll = (() => {
      for (var i = 0; i < height.length; i++) {
        if (height[i] >= h) return i;
      }
    })();
    var rr = Math.max(...idxs);
    answer = Math.max(check(ll, rr), answer);
  }
  return answer;
};
