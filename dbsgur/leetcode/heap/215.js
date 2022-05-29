/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  nums = nums.sort((a, b) => a - b);
  console.log(nums.slice(k, k + 1));
  return nums.slice(k, 1);
};

findKthLargest([3, 2, 1, 5, 6, 4], 2);
