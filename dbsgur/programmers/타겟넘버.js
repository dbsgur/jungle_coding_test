// https://school.programmers.co.kr/learn/courses/30/lessons/43165?language=javascript
function solution(numbers, target) {
  return dfs(numbers, target, 0);
}

function dfs(numbers, target, depth) {
  let answer = 0;
  if (depth === numbers.length) {
    if (numbers.reduce((curr, sum) => curr + sum) === target) {
      return 1;
    }
    return 0;
  }
  answer += dfs(numbers, target, depth + 1);
  numbers[depth] *= -1;
  answer += dfs(numbers, target, depth + 1);
  return answer;
}

console.log(solution([4, 1, 2, 1], 4));
