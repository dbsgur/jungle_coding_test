/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const answer = [];
  const setN = new Set(nums);
  for (let n of setN) {
    answer.push([n, nums.filter((x) => x === n).length]);
  }
  answer.sort((a, b) => b[1] - a[1]);
  return answer[0][0];
};
// discuss
var majorityElement2 = function (nums) {
  const hash = {};

  for (let num of nums) {
    // get element of nums array throght loop
    hash[num] = (hash[num] | 0) + 1; // if num is in hash, get value of nums in hash   if not, get 0

    if (hash[num] > nums.length / 2) return num; // if value of nums in hash is bigger than `nums.length/2`,  return num
  }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
