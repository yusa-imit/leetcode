/**
 * O(n)
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  /*
  let r = nums.filter((v)=>v===0).length;
  let w = nums.filter((v)=>v===1).length;
  let b = nums.filter((v)=>v===2).length;*/
  let [r, w, b] = [0, 0, 0];
  for (var n of nums) {
    if (n === 0) r++;
    if (n === 1) w++;
    if (n === 2) b++;
  }
  const num = (c) => {
    if (c >= r + w) {
      return 2;
    } else if (c >= r) {
      return 1;
    } else {
      return 0;
    }
  };
  let count = 0;
  while (count < nums.length) {
    nums[count] = num(count);
    count++;
  }
};
