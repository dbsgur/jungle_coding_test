/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // dfs
  // const visited = new Array(nums.length).fill(false);
  const answer = [];
  function dfs(x) {
    if (x.length === nums.length) {
      answer.push(x);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!x.includes(nums[i])) {
        dfs([...x, nums[i]]);
      }
    }
    return answer;
  }
  console.log(dfs([]));
};

permute([1, 2, 3]);
