function solution(numbers) {
  var answer = numbers
    .map((c) => c + "")
    .sort((a, b) => b + a - (a + b))
    .join("");
  return answer[0] === "0" ? "0" : answer;
}

console.log(solution([0, 0]));

// function solution(numbers) {
//   let number = [];
//   let zeroNumber = [];
//   let stringNumbers = numbers.map((x) => x + "");
//   for (let stringNumber of stringNumbers) {
//     if (stringNumber[stringNumber.length - 1] === "0") {
//       zeroNumber.push(stringNumber);
//     } else {
//       number.push(stringNumber);
//     }
//   }
//   number.sort().reverse();
//   zeroNumber.sort().reverse();
//   number = number.map((x) => +x);
//   zeroNumber = zeroNumber.map((x) => +x);
//   console.log(number);
//   console.log(zeroNumber);
//   return number.join("") + zeroNumber.join("");
// }

// console.log(solution([3, 30, 34, 5, 9]));
