const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split(/\s/);

let idx = 0;
const answer = [];
const T = +input[idx++];
for (let i = 0; i < T; i++) {
  let count = 0;
  const [x1, y1, x2, y2] = input.slice(idx, idx + 4).map((x) => +x);
  idx += 4;
  const n = +input[idx++];
  for (let j = 0; j < n; j++) {
    const [cx, cy, r] = input.slice(idx, idx + 3).map((x) => +x);
    idx += 3;
    if (
      (x1 - cx) ** 2 + (y1 - cy) ** 2 < r ** 2 &&
      (x2 - cx) ** 2 + (y2 - cy) ** 2 < r ** 2
    )
      continue;
    if ((x1 - cx) ** 2 + (y1 - cy) ** 2 < r ** 2) count++;
    if ((x2 - cx) ** 2 + (y2 - cy) ** 2 < r ** 2) count++;
  }
  answer.push(count);
}

console.log(answer.join("\n"));
