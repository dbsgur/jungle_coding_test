/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const answer = [];
  let tmpM = Math.max(...nums.slice(0, k));
  answer.push(tmpM);
  let i;
  for (i = 1; i <= nums.length - k; i++) {
    if (tmpM < nums[i + k - 1]) {
      tmpM = nums[i + k - 1];
    } else if ((tmpM = nums[i - 1])) {
      tmpM = answer[answer.length - 1];
    }
    answer.push(tmpM);
  }
  // time limit
  // const answer = [];
  // for (let i = 0; i <= nums.length - k; i++) {
  //   answer.push(Math.max(...nums.slice(i, i + k)));
  // }
  return answer;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
