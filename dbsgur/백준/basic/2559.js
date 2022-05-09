const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, K] = input
  .shift()
  .split(" ")
  .map((x) => +x);

let i;
input = input[0].split(" ").map((x) => +x);

let sumN = input.slice(0, K).reduce((sum, curr) => sum + curr);
let maxN = sumN;
// console.log(input.slice(0, K).reduce((sum, curr) => sum + curr));
for (i = K; i < N; i++) {
  sumN = sumN - input[i - K] + input[i];
  maxN = Math.max(sumN, maxN);
}

console.log(maxN);
