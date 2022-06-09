/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  s = [...s];
  t = [...t];
  let sLength = s.length;
  let tLength = t.length;
  let answer = tLength;
  let answerL, answerR;
  if (sLength < tLength) {
    return "";
  } else {
    let left = 0;
    let right = tLength;
    while (true) {
      if (right === sLength + 1 || left > sLength - tLength) {
        break;
      }
      if (!t.includes(s[left])) {
        left++;
        continue;
      }
      if (!s.slice(left, right).forEach((i) => [...t].includes(i))) {
        right++;
        continue;
      } else {
        console.log(s.slice(left, right));
        console.log("loop?");
        if (answer > right - left) {
          console.log("???");
          answer = right - left;
          answerL = left;
          answerR = right;
        }
      }
    }
    return s.slice(answerL, answerR);
  }
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
