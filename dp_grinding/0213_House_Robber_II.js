/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  if(nums.length<=3) return Math.max(...nums)
  var dp1 = new Array(nums.length).fill(0);
  var dp2 = new Array(nums.length).fill(0);
  dp1[0] = nums[0];
  dp1[1] = Math.max(nums[0], nums[1]);
  dp2[0] = 0;
  dp2[1] = nums[1];
  for(var i=2; i<nums.length; i++){
      if(i===nums.length-1){
          dp1[i] = dp1[i-1];
      }
      else dp1[i] = Math.max(dp1[i-2]+nums[i], dp1[i-1]);
      dp2[i] = Math.max(dp2[i-2]+nums[i], dp2[i-1])
  }
  return Math.max(dp1[dp1.length-1], dp2[dp2.length-1]);
};