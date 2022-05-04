/**
 * Just string prob
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  const regex = new RegExp(needle, "g");
  const split = haystack.split(regex);
  return split.length === 1 ? -1 : split[0].length;
};
