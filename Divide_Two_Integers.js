/**
 *
 * Cannot solve this problem with BF
 * Need basic math knowledge
 *
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const sign = Math.sign(dividend) * Math.sign(divisor);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = 2 ** 31 * -1;
  if (divisor === 1) {
    return sign === -1
      ? Math.max(INT_MIN, dividend * sign)
      : Math.min(INT_MAX, dividend * sign);
  }
  let exp = 1;
  let answer = 0;
  while (dividend >= divisor ** exp) {
    exp++;
  }
  exp--;
  while (dividend >= divisor) {
    if (dividend >= divisor ** exp) {
      dividend -= divisor ** exp;
      answer += divisor ** (exp - 1);
    } else {
      exp--;
    }
  }
  return sign === -1
    ? Math.max(INT_MIN, answer * sign)
    : Math.min(INT_MAX, answer * sign);
};
