// https://school.programmers.co.kr/learn/courses/30/lessons/84512?language=javascript

function solution(word) {
  const alphas = ["A", "E", "I", "O", "U"];
  let isFind = false;
  let ans = -1;

  (function f(depth, make) {
    isFind = make == word;
    ans++;
    if (depth == 5 || isFind) return;
    for (let i = 0; i < 5; i++) {
      if (isFind) break;
      f(depth + 1, make + alphas[i]);
    }
  })(0, "");

  return ans;
}

console.log(solution("AAAAE"));
