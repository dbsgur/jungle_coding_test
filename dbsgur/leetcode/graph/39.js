/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates = candidates.filter((x) => x <= target);
  // dp
  const answer = [];
  // dfs
  function dfs(x, result) {
    const sumN = result.reduce((sum, curr) => sum + curr);
    if (sumN === target) {
      answer.push(result);
      return;
    } else if (sumN > target) {
      return;
    }
    for (let candidate of candidates) {
      if (x <= candidate && target - sumN >= candidate) {
        dfs(candidate, [...result, candidate]);
      }
    }
  }
  for (let candi of candidates) {
    dfs(candi, [candi]);
  }
  // console.log(candidates);
  console.log(answer);
};

combinationSum([2, 3, 6, 7], 7);
