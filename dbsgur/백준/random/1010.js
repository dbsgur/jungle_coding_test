const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const nums = input.shift();
let i = 0;
let j;
const answer = [];
for (; i < nums; i++) {
  let tmp = 1;
  [N, M] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  if (N === M) {
    answer.push(tmp);
  } else {
    for (j = M; j > N; j--) {
      tmp *= j;
    }
    for (j = M - N; j > 0; j--) {
      tmp /= j;
    }
    answer.push(Math.round(tmp));
  }
}

console.log(answer.join("\n"));
