/**
 * Sort Algorithm
 * JS Array's sort uses timsort algorithm.
 * Which in time complexity of O(n*logn) in worst case, O(n) in best case,
 * In this case, both arrays are already sorted, so function works in O(n)
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  nums1 = nums1.concat(nums2).sort((a, b) => a - b);
  return nums1.length === 0
    ? 0
    : nums1.length % 2 === 1
    ? nums1[Math.floor(nums1.length / 2)]
    : (nums1[nums1.length / 2] + nums1[nums1.length / 2 - 1]) / 2;
};

//2 4.5
