/**
 * Rotate Clockwise
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  matrix = matrix.reverse();
  for (var i = 0; i < matrix.length; i++) {
    for (var j = i + 1; j < matrix[0].length; j++) {
      var tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }
};
