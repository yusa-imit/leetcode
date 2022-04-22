/**
 * p was actual regex
 * so, you add ^ in front of regex, and $ after regex
 * that means find exact search for global text
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  return new RegExp("^" + p + "$").test(s);
};
