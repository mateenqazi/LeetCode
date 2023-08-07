const longestCommonPrefix = function (strs) {
  strs.sort((a, b) => a.length - b.length);

  const shortStr = strs[0];
  let isPrefix = true;
  let result = "";

  for (let i = 0; i < shortStr.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      isPrefix = isPrefix && shortStr[i] === strs[j][i];
    }
    if (!isPrefix) return result;
    result += shortStr[i];
  }
  return result;
};
