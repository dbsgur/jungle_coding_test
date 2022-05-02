let s = "babaad";

s = s.split("");
lengthS = s.length;
let dp = Array.from(Array(lengthS), () => new Array(lengthS));

let answer = "";
for (let slength = 0; slength < lengthS; slength++) {
  for (let start = 0; start < lengthS - slength; start++) {
    end = start + slength;
    if (start === end) {
      dp[start][end] = 1;
      if (answer === "") {
        answer = s[start];
      }
    } else if (s[start] === s[end]) {
      // console.log(dp[start][end - 1]);
      if (start + 1 === end) {
        dp[start][end] = end - start + 1;
        if (answer.length < end - start + 1) {
          answer = s.slice(start, end + 1).join("");
        }
      } else if (dp[start + 1][end - 1] !== undefined) {
        if (answer.length < end - start + 1) {
          answer = s.slice(start, end + 1).join("");
        }
        dp[start][end] = end - start + 1;
      }
    }
  }
}
console.log(answer);
// 정답 코드
var longestPalindrome = function (s) {
  var str = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      var left = i;
      var right = left + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      if (right - left - 1 > str.length) {
        str = s.slice(left + 1, right);
      }
    }
  }
  return str;
};
