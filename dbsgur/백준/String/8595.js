const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(
  input[1]
    .split(/[a-z]/gi)
    .map((x) => +x)
    .reduce((curr, sum) => curr + sum)
);
