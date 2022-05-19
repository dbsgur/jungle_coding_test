"use strict";
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((x) => +x);

const T = input.shift();
const maxI = Math.max(...input);
// console.log(maxI);

const dp = new Array(maxI + 3).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
let i = 4;
for (; i <= maxI; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

const answer = [];

for (let i of input) {
  // console.log(dp[i]);
  answer.push(dp[i]);
}

console.log(answer.join("\n"));
