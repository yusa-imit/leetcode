/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
  /**
  * without opt
  const arr = new Array(triangle.length).fill(0).map((v, i)=>new Array(i+3).fill(Number.MAX_SAFE_INTEGER));
  arr[0][1] = triangle[0][0];
  for(var i=1; i<triangle.length; i++){
      for(var j=1; j<i+2; j++){
          arr[i][j] = triangle[i][j-1] + Math.min(arr[i-1][j-1], arr[i-1][j]);
      }
  }
  return Math.min(...arr[arr.length-1].filter((v)=>v!==Number.MAX_SAFE_INTEGER));
  */
  
  let arr = [triangle[0][0]];
  for(var i=1; i<triangle.length; i++){
      const tmp = [arr[0]+triangle[i][0]];
      for(var j=1; j<triangle[i].length-1; j++){
          tmp.push(Math.min(arr[j-1], arr[j]) + triangle[i][j]);
      }
      tmp.push(arr[arr.length-1]+triangle[i][triangle[i].length-1]);
      arr = tmp;
  }
  return Math.min(...arr);
};
