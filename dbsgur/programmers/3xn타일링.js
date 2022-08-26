// https://school.programmers.co.kr/learn/courses/30/lessons/12902?language=javascript
// 100
function solution(n) {
  let dp = [0, 3, 11];
  if (n % 2 === 1) return 0;
  let div_n = Math.floor(n / 2);
  for (let i = 3; i <= div_n; i++) {
    dp.push(
      (dp[i - 1] + 2 * dp.reduce((curr, sum) => curr + sum) + 2) % 1000000007
    );
  }
  return dp[div_n];
}

// 효율성 0
function solution(n) {
  const dp = new Array(n + 2).fill(0);
  dp[2] = 3;
  if (n % 2 === 1) return 0;
  for (let i = 4; i <= n; i += 2) {
    dp[i] =
      (dp[i - 2] + 2 * dp.reduce((curr, sum) => curr + sum) + 2) % 1000000007;
  }
  return dp[n];
}
