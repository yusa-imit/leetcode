/**
 * Recursion Solve
 * O(N^2)
 * Gaurantee TIME LIMIT EXCEEDED
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let answer = 0;
  let sol = (n) => {
    if (s[n] === "0") return;
    if (n >= s.length) {
      answer++;
    }
    if (
      n < s.length - 1 &&
      Number(s[n] + s[n + 1]) < 27 &&
      Number(s[n] + s[n + 1]) >= 10
    ) {
      sol(n + 2);
    }
    sol(n + 1);
  };
  sol(0);
  return answer;
};

/**
 * Advancing From Recursion
 * O(n) time/space complexity
 * Do memoization
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let mem = new Array(s.length + 1).fill(-1);
  mem[s.length] = 1;
  let sol = (n) => {
    if (mem[n] > -1) return mem[n];
    if (s[n] === "0") {
      mem[n] = 0;
      return mem[n];
    }
    var res = sol(n + 1);
    if (
      n < s.length - 1 &&
      Number(s[n] + s[n + 1]) < 27 &&
      Number(s[n] + s[n + 1]) >= 10
    ) {
      res += sol(n + 2);
    }
    mem[n] = res;
    return mem[n];
  };
  return s.length === 0 ? 0 : sol(0);
};

/**
 * O(n) time/space complexity with DP
 * Advanced From memoization
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let mem = new Array(s.length + 1).fill(0);
  mem[s.length] = 1;
  for (var i = s.length - 1; i >= 0; i--) {
    if (s[i] === "0") mem[i] = 0;
    else {
      mem[i] = mem[i + 1];
      if (
        i < s.length - 1 &&
        Number(s[i] + s[i + 1]) < 27 &&
        Number(s[i] + s[i + 1]) >= 10
      ) {
        mem[i] += mem[i + 2];
      }
    }
  }
  return mem[0];
};

/**
 * Same time complexity, Constant space complexity
 * With DP
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let answer = 1;
  let ref = 0;
  for (var i = s.length - 1; i >= 0; i--) {
    let cur = s[i] === "0" ? 0 : answer;
    if (
      i < s.length - 1 &&
      Number(s[i] + s[i + 1]) < 27 &&
      Number(s[i] + s[i + 1]) >= 10
    ) {
      cur += ref;
    }
    ref = answer;
    answer = cur;
  }
  return s.length === 0 ? 0 : answer;
};
