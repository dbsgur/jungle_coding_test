const { exit } = require("process");

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const dq = [];
  const answer = [];
  dq.push("");
  while (dq.length) {
    let s = dq.shift();
    if (s && s.length === digits.length) {
      answer.push(s);
    } else {
      let child = map[+digits[s.length]];
      if (child) {
        for (let c of child) {
          dq.push(s + c);
        }
      }
    }
  }
  return answer;
};

console.log(letterCombinations("23"));
