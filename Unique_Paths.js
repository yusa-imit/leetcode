/**
 * Paths are coming from only right & down
 * So, its combinations of m+n-2 of m-1 right and n-1 down
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  function product_Range(a, b) {
    var prd = a,
      i = a;

    while (i++ < b) {
      prd *= i;
    }
    return prd;
  }
  function combinations(n, r) {
    if (n == r || r == 0) {
      return 1;
    } else {
      r = r < n - r ? n - r : r;
      return product_Range(r + 1, n) / product_Range(1, n - r);
    }
  }
  return combinations(m + n - 2, Math.min(n) - 1);
};
