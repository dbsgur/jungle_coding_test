const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const aLength = +input[0];
let cardA = input[1]
  .split(" ")
  .map((x) => +x)
  .sort((a, b) => a - b);
let cardB = input[3].split(" ").map((x) => +x);

// console.log(cardA);
// console.log(cardB);

function binarySearch(num) {
  let left = 0;
  let right = aLength - 1;
  while (left <= right) {
    mid = parseInt((left + right) / 2);
    if (cardA[mid] === num) {
      return 1;
    } else if (cardA[mid] > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return 0;
}

const answer = [];
for (let b of cardB) {
  answer.push(binarySearch(b));
}

console.log(answer.join(" "));
