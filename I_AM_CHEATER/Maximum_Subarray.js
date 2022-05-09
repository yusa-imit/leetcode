/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var sum = nums[0];
  var res = sum;
  for (var i = 1; i < nums.length; i++) {
    sum = sum + nums[i] >= nums[i] ? sum + nums[i] : nums[i];
    res = Math.max(sum, res);
  }
  return res;
};

/**
 * Idea : SubArray는 연속됨
 *
 * sub : 현재 유효한 Subarray
 * 초기값 : 배열의 첫번째 요소
 *
 * res : 답
 * 초기값 : 배열의 첫번째 요소
 *
 *
 * 배열의 첫번째부터 순회한다.
 * 만약 현재까지의 sum(기존의 sum값) 값과 현재 loop중인 배열의 값을 더한 값이 현재 값보다 큰 경우, subarray는 이어진다.
 * 그렇지 않을 경우, 기존의 subarray는 폐기되고, 새로운 subarray를 세팅한다.
 *
 */
