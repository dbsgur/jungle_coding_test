const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const arr = [...input];

if (arr[0] !== "0") {
  console.log(+input);
} else if (arr[1] === "x") {
  console.log(parseInt(input, 16));
} else {
  console.log(parseInt(input, 8));
}
