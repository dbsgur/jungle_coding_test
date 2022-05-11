const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [col, row, ...input] = fs.readFileSync(filePath).toString().split("\n");

//input
// 3
// 2
// 1 2 3
// 4 5 6
// 7 8 9

console.log(`col : ${col}`);

console.log(`row : ${row}`);

console.log(`input : ${input}`);
