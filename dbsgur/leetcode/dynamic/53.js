/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length == 1) return nums[0];
  let maxSum = -Infinity;
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (currentSum < 0) {
      currentSum = 0;
    }
    currentSum += nums[i];
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};

console.log(maxSubArray([-2]));
