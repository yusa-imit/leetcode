/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
 var isInterleave = function(s1, s2, s3) {
  /**
  * TLE
  * Simulation failed
  let p1=0, p2=0;
  let p3 = 0;
  let c=false;
  const conflict = [];
  while(p3!==s3.length){
      //console.log(conflict, c);
      if(s3[p3]===s1[p1] && !c){
          if(s1[p1]===s2[p2]) conflict.push([p1, p2, p3]);
          p1++;
          p3++;
          continue;
      }
      else if(s3[p3]===s2[p2]){
          if(c) c = false;
          p2++;
          p3++;
          continue;
      }
      else{
          if(conflict.length!==0){
              [p1, p2, p3] = conflict.pop();
              c = true;
              continue;
          }
          return false;
      }
  }
  if(p1 !== s1.length || p2!==s2.length || p3!==s3.length) return false;
  return true;
  */
  if(s3.length!==s1.length+s2.length) return false;
  const dp = new Array(s1.length+1).fill(null).map(()=>new Array(s2.length+1).fill(false));
  for(var i=0; i<=s1.length; i++){
      for(var j=0; j<=s2.length; j++){
          if(i===0 && j===0) dp[i][j]=true;
          else if(i===0) dp[i][j] = (dp[i][j-1] && s2[j-1]===s3[j-1]);
          else if(j===0) dp[i][j] = (dp[i-1][j] && s1[i-1]===s3[i-1]);
          else dp[i][j] = (dp[i-1][j] && s1[i-1]===s3[i+j-1]) || (dp[i][j-1] && s2[j-1]===s3[i+j-1]);
      }
  }
  return dp[s1.length][s2.length];
};