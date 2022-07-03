// https://www.acmicpc.net/problem/11653

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

input = +input;

if (input === 1) process.exit(0);
function div(x) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return i;
  }
  return x;
}
answer = [];
while (true) {
  let tmp = div(input);
  input /= tmp;
  answer.push(tmp);
  if (input === 1) break;
}
console.log(answer.join("\n"));
