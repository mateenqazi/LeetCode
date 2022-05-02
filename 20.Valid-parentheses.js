/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      if (
        (s[i] === ")" && stack.pop() === "(") ||
        (s[i] === "}" && stack.pop() === "{") ||
        (s[i] === "]" && stack.pop() === "[")
      ) {
        continue;
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
