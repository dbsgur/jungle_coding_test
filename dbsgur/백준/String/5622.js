const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const dial = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};

let result = 0;
let i, j;
for (i = 0; i < input.length; i++) {
  for (j = 2; j <= 9; j++) {
    if (dial[j].includes(input[i])) {
      result += j + 1;
      break;
    }
  }
}
console.log(result);
