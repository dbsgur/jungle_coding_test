// https://school.programmers.co.kr/learn/courses/30/lessons/12980?language=javascript
function solution(n) {
  let answer = 0;
  while (true) {
    if (n === 1) break;
    if (n % 2 !== 0) {
      n -= 1;
      answer++;
    }
    n /= 2;
  }
  return answer + 1;
}
console.log(solution(6));
