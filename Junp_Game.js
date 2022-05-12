/**
 * Time O(n)
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const end = nums.length - 1;
  let available = 0;
  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0 && available <= i) break;
    else if (nums[i] === 0 && available > i) continue;
    if (available >= end) break;
    available = Math.max(available, i + nums[i]);
  }
  return available >= end ? true : false;
};
