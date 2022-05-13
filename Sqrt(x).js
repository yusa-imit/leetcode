/**
 * best O(log n)
 * worst O(n)?
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0;
  if (x === 1) return 1;
  let answer = Math.trunc(x / 2);
  while (answer * answer > x) {
    answer = Math.trunc(answer / 2);
  }
  while (answer * answer < x) {
    answer++;
  }
  if (answer * answer === x) return answer;
  else return answer - 1;
};
