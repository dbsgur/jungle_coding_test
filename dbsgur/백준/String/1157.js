const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().toUpperCase().trim();

let frequency = new Map();

const wordLength = input.length;
let i;
// pop를 하는게 더 효율적? -> 아님 둘다 O(1)
for (i = 0; i < wordLength; i++) {
  if (!frequency.get(input[i])) {
    frequency.set(input[i], 1);
  } else {
    frequency.set(input[i], frequency.get(input[i]) + 1);
  }
}

const [V, F] = [...frequency.entries()].reduce((a, b) => (a[1] > b[1] ? a : b));

const overlap = [...frequency.entries()].filter((x) => x[1] === F).length;

if (overlap > 1) {
  console.log("?");
} else {
  console.log(V);
}
