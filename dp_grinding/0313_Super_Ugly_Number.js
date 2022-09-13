/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
 var nthSuperUglyNumber = function(n, primes) {
  const arr = [1];
  const p = new Array(primes.length).fill(0);
  const values = [...primes];
  while(arr.length<n){
      const min = Math.min(...values);
      arr.push(min);
      for(var i=0; i<values.length; i++){
          if(values[i]===min){
              p[i]++;
              values[i] = primes[i]*arr[p[i]];
          }
      }
  }
  return arr[n-1];
};