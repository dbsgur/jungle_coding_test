/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const answer = [];
  function dfs(start, end, changeCnt) {
    if (changeCnt > k) {
      answer.push(end - start - 1);
      return;
    }
    if (end === s.length) {
      answer.push(end - start);
      return;
    }
    if (s[start] === s[end]) {
      dfs(start, end + 1, changeCnt);
    } else {
      dfs(start, end + 1, changeCnt + 1);
    }
  }
  s = [...s];
  for (let i = 0; i < s.length; i++) {
    dfs(i, i, 0);
  }
  console.log(answer);
  return Math.max(...answer);
};

console.log(characterReplacement("ABBB", 1));
