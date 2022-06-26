var letterCombinations = function (digits) {
  const obj = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let rtn = obj[digits[0]];
  digits = digits.substr(1);
  digits.split("").forEach((digit) => {
    let t = [];
    obj[digit].forEach((letter) => {
      t = t.concat(rtn.map((item) => item + letter));
    });
    rtn = t;
  });
  return rtn === undefined ? [] : rtn;
};
