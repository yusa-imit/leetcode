/**
 * Unable to use library function sort();
 * O(n)
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const row = [];
  const col = [];
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        row.push(i);
        col.push(j);
      }
    }
  }
  for (var r of row) {
    matrix[r] = new Array(matrix[0].length).fill(0);
  }
  for (var c of col) {
    for (var i = 0; i < matrix.length; i++) {
      matrix[i][c] = 0;
    }
  }
};
