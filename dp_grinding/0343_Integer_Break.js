/**
 * @param {number} n
 * @return {number}
 */
 var integerBreak = function(n) {
  if(n===2) return 1;
  if(n===3) return 2;
  let answer = 1;
  let threes = Math.floor(n/3);
  let lefts = n%3;
  if(lefts === 1){
      threes--;
      lefts=4;
  }
  return 3**threes*(lefts===0?1:lefts);
};
/**
2 1*1 = 1
3 2*1 = 2
4 2*2 = 4
5 2*3 = 6
6 3*3 = 9
7 2*2*3 = 12
8 2*3*3=18
9 3*3*3=27
10 2*2*3*3=36
11 2*3*3*3=54
12 3*3*3*3=81
*/