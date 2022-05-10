var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  // console.log(nums);
  let answer = nums.reduce((sum, curr, idx) => {
    if (idx % 2 === 0) {
      sum += curr;
    }
    return sum;
    // console.log(sum, curr, idx);
  });

  return answer;
};

console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
