// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  s = [...s];
  let answer = new Map();
  let lengthS = s.length;
  let i;
  let max = 0;
  for (i = 0; i < lengthS; i++) {
    if (answer.has(s[i])) {
      max = Math.max(max, answer.size);
      answer = new Map([...answer].filter(([k, v]) => v > answer.get(s[i])));
    }
    answer.set(s[i], i);
  }
  return Math.max(max, answer.size);
};
