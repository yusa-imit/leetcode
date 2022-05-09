/**
 * FSM?
 * solve in O(n)
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const ref = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let cur = 0;
  let [col, row] = [0, 0];
  const answer = [];
  while (true) {
    if (answer.length === matrix.length * matrix[0].length) break;
    answer.push(matrix[row][col]);
    matrix[row][col] = null;
    if (row + ref[cur][0] >= matrix.length || row + ref[cur][0] < 0) {
      cur = (cur + 1) % ref.length;
    } else if (col + ref[cur][1] >= matrix[0].length || col + ref[cur][1] < 0) {
      cur = (cur + 1) % ref.length;
    } else if (matrix[row + ref[cur][0]][col + ref[cur][1]] === null) {
      cur = (cur + 1) % ref.length;
    }
    row = row + ref[cur][0];
    col = col + ref[cur][1];
  }
  return answer;
};
