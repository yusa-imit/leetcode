/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var combinationSum4 = function(nums, target) {
  /**
  nums=nums.filter((v)=>v<=target);
  console.log(nums);
  const dp = new Array(target+1).fill(0);
  dp[0] = 0;
  for(var num of nums){
      dp[num] = 1;
  }
  for(var i=1; i<=target; i++){
      let val = 0;
      for(var j=1; j<i; j++){
          if(j===i/2) val+=dp[j]**2/2
          else val+=dp[j]*dp[i-j];
      }
      dp[i]=val+dp[i];
  }
  console.log(dp);
  return dp[target];*/
  
  // --- recursive ---
  /**
  nums=nums.filter((v)=>v<=target);
  if(target === 0){
      return 1;
  }
  var res = 0;
  for(var i=0; i<nums.length; i++){
      res+=combinationSum4(nums, target-nums[i]);
  }
  return res;
  */
  const dp = new Array(target+1).fill(-1);
  dp[0] = 1;
  const solve = (target) => {
      if(dp[target]!==-1) return dp[target];
      
          var res = 0;
          for(var i=0; i<nums.length; i++){
              if(target>=nums[i]){
                  res+=solve(target-nums[i]);
              }
          }
          dp[target]=res;
          return res;
  }
  solve(target);
  return dp[target];
};

// for num of nums
// dp[1] = 1;
// dp[2] = 1;
// dp[3] = 1;
// dp[1] = 1;
// dp[2] = dp[1]*dp[1]+dp[2] = 2+1; 3-1
// dp[3] = dp[1]*dp[2]+dp[3] = 2+2+1 = 4; 5-1
// dp[4] = dp[3]*dp[1] + dp[2]*dp[2] = 4*1+4*1 + 2*2/2 -3 = 7 10-3
/**
111 1*
12 1*
21 1
3 1

1 111*
1 12
1 21
1 3


2 2
11 11
11 11*
2 2*

*/