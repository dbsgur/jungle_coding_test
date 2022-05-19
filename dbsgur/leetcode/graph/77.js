/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const numbers = Array.from({ length: n }, (_, index) => index + 1);
  // console.log(`numbers : ${numbers}`);
  const answer = [];
  // dfs
  function dfs(x, result) {
    if (result.length === k) {
      answer.push(result);
      return;
    }
    for (let num = x + 1; num <= n; num++) {
      if (!result.includes(num)) {
        dfs(num, [...result, num]);
      }
    }
  }
  for (let i = 1; i <= n; i++) {
    dfs(i, [i]);
  }
  return answer;
};

// console.log(combine(4, 2));
