const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = +input;

// console.log(input);

const leapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 400 === 0 || year % 100 !== 0) {
      return 1;
    }
    return 0;
  }
  return 0;
};

console.log(leapYear(input));
