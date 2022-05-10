/**
 * simple permutation
 * beat 94% speed
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const arr = [];
  const answer = [];
  const per = (_nums) => {
    if (arr.length === nums.length) {
      answer.push([...arr]);
      return;
    }
    for (var i = 0; i < _nums.length; i++) {
      arr.push(_nums[i]);
      per(_nums.filter((v) => v !== _nums[i]));
      arr.pop();
    }
  };
  per(nums);
  return answer;
};
