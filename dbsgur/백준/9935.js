const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

while (true) {
  if (input[0].length === 0) break;
  if (input[0].replaceAll(input[1], "") === input[0]) break;
  input[0] = input[0].replaceAll(input[1], "");
}

if (input[0].length === 0) console.log("FRULA");
else console.log(input[0]);
