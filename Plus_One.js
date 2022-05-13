/**
 * BIG INT problem
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  return String(
    BigInt(Array.from(digits, (v) => String(v)).join("")) + 1n
  ).split("");
};
