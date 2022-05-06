const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

const factorial = (number) => {
  if (number === 0) {
    return 1;
  } else if (number > 0) {
    return number * factorial(number - 1);
  }
};

input = +input;

console.log(factorial(input));
