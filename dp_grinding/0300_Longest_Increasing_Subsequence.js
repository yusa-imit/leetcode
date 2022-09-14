/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  const dp = new Array(nums.length).fill(1);
  for(var i=0; i<nums.length; i++){
      for(var j=0; j<i; j++){
          if(nums[i]>nums[j] && dp[i] < dp[j]+1)
              dp[i] = dp[j]+1;
      }
  }
  return Math.max(...dp);
};