const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
sum = input[0]
  .split("")
  .map((x) => +x)
  .reduce((sum, curr) => sum + curr);

console.log(sum);
