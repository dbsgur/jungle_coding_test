const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// const N = input.shift();
input.shift();

input = input[0].split(" ").map((x) => +x);

console.log(Math.min(...input));
console.log(Math.max(...input));
