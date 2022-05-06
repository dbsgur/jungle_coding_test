const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

input = input.map((x) => +x);

const snail = (heights) => {
  let [A, B, V] = [...heights];
  // console.log(A, B, V);
  let day = (V - B) / (A - B);
  console.log(day);
  console.log(Math.ceil(day));
};

snail(input);
