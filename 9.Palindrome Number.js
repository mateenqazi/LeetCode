/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const value = x.toString();
  let last = value.length - 1;
  for (let i = 0; i < value.length / 2; i++) {
    if (value[i] !== value[last]) {
      return false;
    }
    last -= 1;
  }
  return true;
};
