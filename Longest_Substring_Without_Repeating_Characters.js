/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let MAX = 0;
  let dict = "";
  let currentText;
  for (var start = 0; start < s.length; start++) {
    if (s.length - start <= MAX) break;
    currentText = "";
    for (var i = start; i < s.length; i++) {
      let nextText = s[i];
      if (!currentText.includes(nextText)) {
        currentText += s[i];
      } else {
        break;
      }
    }
    if (MAX >= currentText.length) continue;
    else {
      MAX = Math.max(MAX, currentText.length);
      dict = currentText;
    }
  }
  return dict.length;
};
