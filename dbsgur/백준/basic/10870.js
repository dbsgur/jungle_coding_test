const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

input = +input;

dp = Array.from(Array(input + 2).fill(0));
dp[1] = 1;
let i;
if (input > 1) {
  for (i = 2; i < input + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
}
// console.log(dp);
console.log(dp[input]);
