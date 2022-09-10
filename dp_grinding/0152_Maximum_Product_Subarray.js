/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * Basic Concept : 배열을 순회하면서 이전의 최대값을 이용하여 현재의 최대값을 구함
 * Constraint : 배열의 멤버중에 음수가 있음. 현재 최대값이 다음 순회에서 최저값으로 변모할 가능성이 있고, 이전 순회의 최저값이라고 생각했던 것이 이번 순회에 최댓값이 될 수 있음.
 * Solve : 순회하면서 최대값과 최소값을 전부 계산하여 저장함
 * 최대값, 최솟값이 변화하는 경우의 수는
 * 1. 최대값 * 현재 배열 순회 값
 * 2. 배열 순회 값
 * 3. 최솟값 * 현재 배열 순회 값
 * 
 * 세종류이므로 최대값은 세 경우의 수 중 MAX, 최소값은 세 경우의 수 중 MIN 이 된다.
 * 
 * 물론 배열을 순회하면서 전체 중 최대값이 되는 MAX포인트는 저장해두어야 한다.
 */
 var maxProduct = function(nums) {
  // dp[0]: 최대값
  // dp[1]: 최소값
  // dp[2]: 글로벌 최대값
  const dp = [nums[0], nums[0], nums[0]];
  for(var i=1; i<nums.length; i++){
    // 경우의 수 세가지
      var opt = [dp[0]*nums[i], nums[i], dp[1]*nums[i]];
      dp[0] = Math.max(...opt);
      dp[1] = Math.min(...opt);
      dp[2] = Math.max(dp[0], dp[2]);
  }
  return dp[2];
};