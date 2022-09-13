var nthUglyNumber = function(n) {
  const limit = [2,3,5];
  const arr = [1];
  let p = [0, 0, 0];
  const getMinValIndex = (a) => {
      let index=[];
      const value = Math.min(...a);
      a.forEach((v, i)=>{
          if(value === v){
              index.push(i);
          }
      })
      return [value, index];
      
  }
  while(arr.length<n){
      let candidates = Array.from(limit, (v, i)=>v*arr[p[i]]);
      const [v, idxes] = getMinValIndex(candidates);
      arr.push(v);
      for(var i=0; i<idxes.length; i++){
          p[idxes[i]]++;
      }
  }
  return arr[n-1];
};