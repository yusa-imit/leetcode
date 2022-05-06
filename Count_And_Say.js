/**
 * Recursive & String
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  function recursive(num) {
    if (num === 1) {
      return "1";
    } else {
      let newString = "";
      let string = recursive(num - 1);
      let arr = string.split("");
      let count = 0;
      let ref = null;
      for (var ar of arr) {
        if (ref === null) {
          ref = ar;
          count++;
          continue;
        }
        if (ar !== ref) {
          newString = newString + count.toString() + ref;
          count = 1;
          ref = ar;
        } else {
          count++;
        }
      }
      newString = newString + count.toString() + ref;
      return newString;
    }
  }
  return recursive(n);
};
