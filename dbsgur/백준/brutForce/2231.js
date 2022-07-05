const fs = require("fs");
const { exit } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function sumS(num) {
  let numA = [...String(num)].map((x) => +x).reduce((cur, sum) => cur + sum);
  return num + numA;
}
input = +input;

for (let i = 1; i < input; i++) {
  if (sumS(i) === input) {
    console.log(i);
    exit(0);
  }
}
console.log(0);
