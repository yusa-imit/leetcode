/**
 * simple atoi
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const MIN = Math.pow(2, 31) * -1;
  const MAX = Math.pow(2, 31) - 1;
  const sign = Math.sign(x);
  const num =
    Number(Math.abs(x).toString().split("").reverse().join("")) * sign;
  return num < MIN || num > MAX ? 0 : num;
};
