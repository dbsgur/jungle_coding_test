const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let A = new Set(input[1].split(" "));
let B = new Set(input[2].split(" "));

// console.log([...A].filter((x) => !B.has(x)).length);
// console.log([...B].filter((x) => !A.has(x)).length);

console.log(
  [...A].filter((x) => !B.has(x)).length +
    [...B].filter((x) => !A.has(x)).length
);
