/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const answer = [[]];
  nums = nums.sort((a, b) => a - b);
  const lengthN = nums.length;
  // dfs
  function dfs(x, result) {
    if (result.length === lengthN) {
      // console.log("plz print");
      // answer.push([...result]);
      return;
    }
    for (let i = x + 1; i < lengthN; i++) {
      // console.log(`nums[i] : ${nums[i]}`);
      answer.push([...result, nums[i]]);
      dfs(i, [...result, nums[i]]);
    }
  }
  for (let j = 0; j < lengthN; j++) {
    answer.push([nums[j]]);
    dfs(j, [nums[j]]);
  }
  return answer;
};
console.log(subsets([1, 2, 3]));
