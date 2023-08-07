/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longest = "";
  let current = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (!current.split("").includes(s[j])) {
        current += s[j];
      } else {
        break;
      }
    }
    if (current.length > longest.length) {
      longest = current;
    }
    current = "";
  }
  return longest.length;
};
