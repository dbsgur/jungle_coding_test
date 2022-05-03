let nums = [1, 2, 3, 4];

var leftMultiple = [];
var rightMultiple = [];

let left, right;
let lengthN = nums.length;

for (left = 0, right = lengthN - 1; left < lengthN; left++, right--) {
  if (left === 0) {
    leftMultiple[left] = nums[left];
    rightMultiple[right] = nums[right];
    continue;
  }
  leftMultiple[left] = leftMultiple[left - 1] * nums[left];
  rightMultiple[right] = rightMultiple[right + 1] * nums[right];
}

// console.log(leftMultiple);

// console.log(rightMultiple);
let answer = [];
let i;
for (i = 0; i < lengthN; i++) {
  if (i === 0) {
    answer[i] = rightMultiple[i + 1];
    continue;
  } else if (i === lengthN - 1) {
    answer[i] = leftMultiple[i - 1];
  } else {
    answer[i] = leftMultiple[i - 1] * rightMultiple[i + 1];
  }
}
console.log(answer);
