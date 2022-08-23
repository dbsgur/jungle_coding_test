// https://school.programmers.co.kr/learn/courses/30/lessons/12924?language=javascript
// 100
function solution(n) {
  var answer = 1;
  const mid = n / 2;
  for (let i = 1; i <= mid; i++) {
    let sum = 0;
    for (let j = i; j <= mid + 1; j++) {
      sum += j;
      if (sum === n) {
        answer++;
        break;
      } else if (sum > n) {
        break;
      }
    }
  }
  return answer;
}

// 효율성 16.7 / 25 ㅠ
function solution(n) {
  var answer = 1;
  for (let i = 1; i <= n / 2; i++) {
    if (dfs(i, n)) {
      answer++;
    }
  }
  return answer;
}

function dfs(start, n) {
  let sum = 0;
  for (let i = start; i <= n / 2 + 1; i++) {
    sum += i;
    if (sum === n) {
      return true;
    } else if (sum > n) {
      return false;
    }
  }
}

// 효율성 0점
function solution(n) {
  var answer = 0;
  const dp = Array.from(Array(n + 1), () => new Array(n + 1).fill(0));
  for (let start = 1; start <= n; start++) {
    for (let end = start; end <= n; end++) {
      dp[start][end] = dp[start][end - 1] + end;
      if (dp[start][end] === n) {
        answer++;
      }
    }
  }
  return answer;
}
