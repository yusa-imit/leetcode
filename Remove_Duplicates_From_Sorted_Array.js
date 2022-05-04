/**
 *
 * Array with two pointer
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var temp = -101;
  for (var i = 0; i < nums.length; i++) {
    if (temp !== nums[i]) {
      temp = nums[i];
      continue;
    } else {
      nums[i] = 101;
    }
  }
  nums.sort((a, b) => a - b);
  return nums.filter((v) => v !== 101).length;
};
