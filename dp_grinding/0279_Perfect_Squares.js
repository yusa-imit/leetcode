/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
  const dp = [0];
  while(dp.length<=n){
      let temp = Number.MAX_SAFE_INTEGER;
      for(var i=1; i*i<=dp.length; i++){
          temp = Math.min(temp, dp[dp.length-i*i]+1);
      }
      dp.push(temp);
  }
  return dp[n]
};