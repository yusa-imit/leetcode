/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
  const answer = []
  // find palindromes in s
  const dp = new Array(s.length).fill(null).map(()=>new Array(s.length).fill(false));
  for(var i=0; i<dp.length; i++){
      dp[i][i] = true;
  }
  for(var len = 2; len<=s.length; len++){
      for(var i=0; i<s.length-len+1; i++){
          var j = i+len-1;
          if(len===2){
              dp[i][j] = s[i]===s[j];
          }
          else dp[i][j] = s[i]===s[j] && dp[i+1][j-1];
      }
  }
  // recursive or backtracking
  const stack = [];
  const findAnswer = (idx) => {
      if(idx===s.length){
          answer.push([...stack]);
      }
      for(var i=idx; i<s.length; i++){
          if(dp[idx][i]){
              stack.push(s.slice(idx, i+1));
              findAnswer(i+1);
              stack.pop();
          }
      }
  }
  findAnswer(0);
  return answer;
};