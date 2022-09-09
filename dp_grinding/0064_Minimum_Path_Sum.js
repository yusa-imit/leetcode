/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
  const dp = new Array(grid.length).fill(0).map(()=>new Array(grid[0].length).fill(0));
  dp[0][0] = grid[0][0]
  for(var i=1; i<grid.length; i++){
      dp[i][0] = grid[i][0]+dp[i-1][0];
  }
  for(var i=1; i<grid[0].length; i++){
      dp[0][i] = grid[0][i]+dp[0][i-1];
  }
  for(var i=1; i<grid.length; i++){
      for(var j=1; j<grid[0].length; j++){
          dp[i][j] = dp[i][j-1]>dp[i-1][j]?grid[i][j]+dp[i-1][j]:grid[i][j]+dp[i][j-1];
      }
  }
  return dp[dp.length-1][dp[0].length-1];
};