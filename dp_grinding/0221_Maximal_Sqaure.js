/**
 * @param {character[][]} matrix
 * @return {number}
 */

/**
 * https://leetcode.com/problems/maximal-square/discuss/600149/Python-Thinking-Process-Diagrams-DP-Approach
 */
 var maximalSquare = function(matrix) {
  const dp = new Array(matrix.length+1).fill(null).map((v)=>new Array(matrix[0].length+1).fill(0));
  let max = 0;
  for(var i=0; i<matrix.length; i++){
      for(var j=0; j<matrix[0].length; j++){
          if(matrix[i][j]==='1'){
              dp[i+1][j+1] = Math.min(dp[i][j], dp[i+1][j], dp[i][j+1]) +1;
              max = Math.max(dp[i+1][j+1], max);
          }
      }
  }
  return max**2
};