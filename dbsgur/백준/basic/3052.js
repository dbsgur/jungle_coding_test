const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((x) => +x);

const mod = (numbers) => {
  let result = new Set();
  for (let num of numbers) {
    result.add(num % 42);
  }
  return result.size;
};

console.log(mod(input));
