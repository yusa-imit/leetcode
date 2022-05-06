/**
 * solve in less than O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const arr = Array.from(new Set(nums))
    .filter((v) => v >= 1)
    .sort((a, b) => a - b);
  let ref = 1;
  for (var n of arr) {
    if (n === ref) {
      ref++;
      continue;
    } else return ref;
  }
  return ref++;
};
