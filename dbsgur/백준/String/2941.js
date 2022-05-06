const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let regex = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;

const result = input.replace(regex, " ");

console.log(result.length);

// 밑이 더 빠름

// const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

// for (let word of croatia) {
//   input = input.split(word).join("^");
// }

// console.log(input.length);
