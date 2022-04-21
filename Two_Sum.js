/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var searched = {};
  for (var i = 0; i < nums.length; i++) {
    if (searched[target - nums[i]] === undefined) {
      searched[nums[i]] = i;
      continue;
    }
    //console.log(searched);
    return [i, searched[target - nums[i]]];
  }
};
