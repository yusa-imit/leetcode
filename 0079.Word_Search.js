/**
 * BackTracking Prob
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const ref = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const cross = (i, j, c, t) => {
    let cr = [];
    for (var ar of ref) {
      let ii = i + ar[0],
        jj = j + ar[1];
      if (ii < 0 || ii > board.length - 1) continue;
      if (jj < 0 || jj > board[0].length - 1) continue;
      if (board[ii][jj] === c && !t.includes(JSON.stringify([ii, jj])))
        cr.push([ii, jj]);
    }
    return cr;
  };
  const getLetters = (c) => {
    let arr = [];
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[0].length; j++) {
        if (board[i][j] === c) {
          arr.push([i, j]);
        }
      }
    }
    return arr;
  };
  let answer = false;
  const find = (prev, t, n) => {
    if (answer === true) return;
    if (t.length === word.length) {
      answer = true;
      return;
    }
    const next = cross(prev[0], prev[1], word[n], t);
    if (next.length === 0) return;
    for (var nextMember of next) {
      t.push(JSON.stringify(nextMember));
      find(nextMember, t, n + 1);
      t.pop();
    }
  };
  const initial = getLetters(word[0]);
  if (initial.length === 0) return false;
  for (var f of initial) {
    if (answer === true) break;
    var traveled = [JSON.stringify(f)];
    find(f, traveled, 1);
  }
  return answer;
};
