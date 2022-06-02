/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const numsLength = nums.length;
  if (numsLength === 1) {
    return nums[0];
  }
  const dp = Array(numsLength).fill(0);
  dp[0] = nums[0];
  dp[1] = nums[1];
  let i;
  for (i = 2; i < numsLength; i++) {
    dp[i] = nums[i] + Math.max(...dp.slice(0, i - 1));
  }
  return Math.max(dp[numsLength - 1], dp[numsLength - 2]);
};
