const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = input.shift();

let rings = input[0].split(" ").map((x) => +x);

const stand = rings[0];
let i, div;
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};
for (i = 1; i < N; i++) {
  div = gcd(stand, rings[i]);
  console.log(stand / gcd, "/", rings[i] / gcd);
  // console.log("div : ", div);
}
