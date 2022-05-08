const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [N, M] = input
  .shift()
  .split(" ")
  .map((x) => +x);

let nums = input[0].split(" ").map((x) => +x);
let i;
let sum = 0;
for (i = 0; i < +N; i++) {
  sum += nums[i];
  nums[i] = sum;
}
// const solution = (start, end) => {
//   let sum = 0;
//   let i;
//   for (i = start - 1; i < end; i++) {
//     sum += nums[i];
//   }
//   return sum;
// };

// let i;
let answer = [];
for (i = 1; i <= +M; i++) {
  let [start, end] = input[i].split(" ").map((x) => +x);
  if (start === 1) {
    answer.push(nums[end - 1]);
    // console.log(nums[end - 1]);
  } else {
    answer.push(nums[end - 1] - nums[start - 2]);
    // console.log(nums[end - 1] - nums[start - 2]);
  }
}

console.log(answer.join("\n"));
