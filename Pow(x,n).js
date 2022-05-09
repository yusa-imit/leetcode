/**
 * solve in O(log n)
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1;
  var pow = (x, num) => {
    if (num === 1) return x;
    const nn = num - (num % 2);
    const isOdd = num % 2;
    return pow(x, nn / 2) ** 2 * x ** isOdd;
  };
  const xx = n < 0 ? 1 / x : x;
  const _n = Math.abs(n);
  return pow(xx, _n);
};
