/**
 * NEED IMPROVEMENT
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const strings = new Set();
  const p = ["(", "", ")", ""];
  let arr = ["(", "", ")", ""];
  const dfs = (arr) => {
    arr = arr.flat(1);
    if (arr.join("").length === n * 2) {
      strings.add(arr.join(""));
      return;
    } else {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== "") continue;
        arr[i] = p;
        dfs(arr);
        arr[i] = null;
        arr.push(p);
        dfs(arr);
        arr.pop();
      }
    }
  };
  dfs(arr);
  return Array.from(strings);
};
