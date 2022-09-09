/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
  if(obstacleGrid[0][0]===1) return 0;
  const dp = new Array(obstacleGrid.length);
  for(var i=0; i<dp.length; i++){
      dp[i] = new Array(obstacleGrid[0].length).fill(0);
  }
  /*
  for(var i=0; i<obstacleGrid[0].length; i++){
      if(obstacleGrid[0][i]===1) break;
      dp[0][i] = 1;
  }
  for(var i=0; i<obstacleGrid.length;i++){
      if(obstacleGrid[i][0]===1) break;
      dp[i][0] = 1;
  }*/
  dp[0][0] = 1;
  for(var i=0; i<obstacleGrid.length; i++){
      for(var j=0; j<obstacleGrid[0].length; j++){
          if(obstacleGrid[i][j]===1) continue;
          if(i===0 && j===0) continue;
          if(i===0) dp[i][j] = dp[i][j-1];
          else if(j===0) dp[i][j] = dp[i-1][j];
          else dp[i][j] = dp[i-1][j] + dp[i][j-1];
      }
  }
  return dp[dp.length-1][dp[0].length-1];
};