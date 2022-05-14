/**
 * Simple BackTracking Prob
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let answer = [];
  let arr = [];
  const fu = (n) => {
    if (n === nums.length) {
      answer.push([...arr]);
      return;
    } else {
      arr.push(nums[n]);
      fu(n + 1);
      arr.pop();
      fu(n + 1);
    }
  };
  fu(0);
  return answer;
};
