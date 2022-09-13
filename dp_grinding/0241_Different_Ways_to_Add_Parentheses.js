/**
 * @param {string} expression
 * @return {number[]}
 */
 var diffWaysToCompute = function(expression) {
  const dp = {};
  const op = ["+", "-","*"]
  const dfs = (exp) => {
      if(dp[exp]) return dp[exp];
      const arr = [];
      for(var i=0; i<exp.length; i++){
          if(op.includes(exp[i])){
              const L = dfs(exp.slice(0, i));
              const R = dfs(exp.slice(i+1, exp.length));
              for(var Ls of L){
                  for(var Rs of R){
                    if(exp[i]==="+"){
                        arr.push(Ls+Rs);
                    } else if(exp[i]==="-"){
                        arr.push(Ls-Rs);
                    } else arr.push(Ls*Rs);
                  }
              }
          }
      }
      if(arr.length === 0){
          arr.push(Number(exp));
      }
      dp[exp] = arr;
      return arr;
  }
  return dfs(expression);
};