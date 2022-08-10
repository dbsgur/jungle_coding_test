const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((x) => +x);
const lectures = input[1].split(" ").map((x) => +x);

function count(num) {
  let cnt = 0;
  let sum_lecture = 0;
  for (let i = 0; i < N; i++) {
    if (sum_lecture + lectures[i] > num) {
      cnt++;
      sum_lecture = 0;
    }
    sum_lecture += lectures[i];
  }
  if (sum_lecture) cnt++;
  return cnt;
}

let left = Math.max(...lectures);
let right = lectures.reduce((cur, sum) => cur + sum);
while (left <= right) {
  let mid = parseInt((left + right) / 2);
  if (count(mid) > M) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(left);
