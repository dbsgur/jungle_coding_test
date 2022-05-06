const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const count = +input.shift();
let answer = 0;
let i, j;

for (i = 0; i < count; i++) {
  let word = input[i];
  let letter = [];
  let flag = true;
  for (j = 0; j < word.length; j++) {
    if (letter.indexOf(word[j]) === -1) {
      letter.push(word[j]);
    } else {
      if (letter.indexOf(word[j]) !== letter.length - 1) {
        flag = false;
        break;
      }
    }
  }
  if (flag) {
    answer += 1;
  }
}
console.log(answer);

// why wrong ...?

// input.shift();

// const lengthW = input.length;
// let alpha;
// let i, j, flag;
// let answer = 0;

// for (i = 0; i < lengthW; i++) {
//   let lengthI = input[i].length;
//   if (lengthI === 1) {
//     continue;
//   }
//   alpha = Array.from(Array(26).fill(false));
//   flag = true;
//   for (j = 0; j < lengthI; j++) {
//     if (j > 0) {
//       if (input[i][j] === input[i][j - 1]) {
//         continue;
//       }
//     }
//     if (alpha[input[i].charCodeAt(j) - 97] === false) {
//       alpha[input[i].charCodeAt(j) - 97] = true;
//     } else {
//       flag = false;
//       break;
//     }
//   }
//   if (flag) {
//     answer += 1;
//   }
// }
// console.log(answer);
