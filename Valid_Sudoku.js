/**
 *
 * Hash table and matrix usage prob.
 * calculated within 3*9*9
 *
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function (board) {
  // valid function
  const valid = (a) => {
    let arr = {};
    for (var v of a.filter((v) => v !== ".")) {
      if (!arr[v]) {
        arr[v] = 1;
        continue;
      }
      arr[v]++;
    }
    if (Object.values(arr).filter((v) => v >= 2).length !== 0) return false;
    else return true;
  };
  console.log("row");
  // valid row
  for (var b of board) {
    if (!valid(b)) return false;
  }
  console.log("col");
  // valid col
  for (var i = 0; i < 9; i++) {
    let col = [];
    for (var j = 0; j < 9; j++) {
      col.push(board[j][i]);
    }
    if (!valid(col)) return false;
  }
  console.log("mat");
  //valid matrix
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      let matrix = [];
      for (var m = 0; m < 3; m++) {
        for (var n = 0; n < 3; n++) {
          matrix.push(board[m + i * 3][n + j * 3]);
        }
      }
      if (!valid(matrix)) return false;
    }
  }
  return true;
};
