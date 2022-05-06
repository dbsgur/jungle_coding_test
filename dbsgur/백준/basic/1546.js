const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = +input.shift();
let scores = input[0].split(" ").map((x) => +x);

// console.log(N);
// console.log(scores);
let maxS = Math.max(...scores);
scores = scores.map((x) => x / maxS);

const sum = scores.reduce((sum, curr) => sum + curr);

console.log(((sum * 100) / N).toFixed(2));
