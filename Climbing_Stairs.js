/**
 * It was fibonacci with initial number is little different
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const fibo = (e) => {
    const sequence = [1, 1];
    for (var i = 2; i <= e; i++) {
      sequence[i] = sequence[i - 2] + sequence[i - 1];
    }
    return sequence[e];
  };
  return fibo(n);
  /*
  2 = 2
  3 = 3
  4 = 5
  
  1111
  121
  211
  112
  22
  
  
  5 = 8
  
  11111
  1211
  2111
  1121
  1112
  122
  212
  221
  
  6 = 13
      
  111111
  222
  11112
  11121
  11211
  12111
  21111
  1122
  1122
  1212
  2112
  2121
  2211
  
  */
};
