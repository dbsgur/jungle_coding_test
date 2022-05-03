const { exit } = require("process");

let nums = [3, 2, 4];
let target = 9;

const lengthN = nums.length;
let i, j, sum;
let answer = [];

for (i = 0; i < lengthN; i++) {
  for (j = 0; j < lengthN; j++) {
    if (i === j) {
      continue;
    }
    sum = nums[i] + nums[j];
    if (sum === target) {
      console.log([i, j]);
      exit(1);
    }
  }
}

console.log(answer);
