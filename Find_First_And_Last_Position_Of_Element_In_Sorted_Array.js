/**
 *
 * Binary Search prob
 * Solved in O(log n)
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const bSearch = (arr, t) => {
    let start = 0,
      end = arr.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === t) return mid;
      else if (arr[mid] < t) start = mid + 1;
      else end = mid - 1;
    }
    return -1;
  };
  const refIdx = bSearch(nums, target);
  if (refIdx === -1) return [-1, -1];
  let [l, r] = [refIdx, refIdx];
  while (nums[l] === target) {
    l--;
  }
  l++;
  while (nums[r] === target) {
    r++;
  }
  r--;
  return [l, r];
};
