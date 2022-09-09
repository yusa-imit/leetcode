/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
  const dp = new Array(word1.length+1).fill(0).map(()=>new Array(word2.length+1).fill(0));
  for(var i=0; i<=word1.length; i++){
      dp[i][0] = i;
  }
  for(var i=0; i<=word2.length; i++){
      dp[0][i] = i;
  }
  for(var i=1; i<=word1.length; i++){
      for(var j=1; j<=word2.length; j++){
          if(word1[i-1] === word2[j-1]){
              dp[i][j] = dp[i-1][j-1];
          }
          else{
              dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) +1;
          }
      }
  }
  return dp[dp.length-1][dp[0].length-1];
};
