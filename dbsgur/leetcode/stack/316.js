var removeDuplicateLetters = function (s) {
  s = s.split("");
  let lengthS = s.length;
  let i;
  let answer = [];
  for (i = 0; i < lengthS; i++) {
    if (answer.indexOf(s[i]) !== -1) {
      // exist
      answer.splice(
        answer.findIndex((x) => x === s[i]),
        1
      );
      answer.push(s[i]);
    } else {
      answer.push(s[i]);
    }
  }
  return answer.join("");
};

console.log(removeDuplicateLetters("abcbcbv"));
