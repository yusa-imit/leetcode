/**
 * See
 * https://leetcode.com/problems/minimum-window-substring/discuss/26808/Here-is-a-10-line-template-that-can-solve-most-'substring'-problems
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const map = {};
  for (var c of t) {
    map[c] = map[c] === undefined ? 1 : map[c]++;
  }
  let counter = t.length,
    begin = 0,
    end = 0,
    d = Number.MAX_SAFE_INTEGER,
    head = 0;
  while (end < s.length) {
    if (map[s[end]] === undefined) map[s[end]] = 0;
    if (map[s[end]]-- > 0) counter--;
    end++;
    while (counter == 0) {
      console.log("enter counter phase");
      if (end - begin < d) {
        head = begin;
        d = end - head;
      }
      if (map[s[begin++]]++ == 0) {
        console.log("leave counter phase");
        counter++;
      }
      console.log(s.substring(begin, end + 1));
    }
    console.log(s.substring(begin, end + 1));
  }
  console.log(map);
  return d === Number.MAX_SAFE_INTEGER ? "" : s.substring(head, head + d);
};
