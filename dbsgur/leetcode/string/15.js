let nums = [-1, 0, 1, 2, -1, -4];

nums.sort((a, b) => a - b);
let answer = [];

const lengthN = nums.length;

for (let i = 0; i < lengthN; i++) {
  if (i > 0 && nums[i] === nums[i - 1]) {
    continue;
  }
  let start = i + 1;
  let end = lengthN - 1;
  while (start < end) {
    let sum = nums[i] + nums[start] + nums[end];
    if (sum === 0) {
      answer.push([nums[i], nums[start], nums[end]]);
      start++;
      while (nums[start] == nums[start - 1] && start < end) {
        start++;
      }
    } else if (sum < 0) start++;
    else end--;
  }
}
console.log(answer);

// let nums = [0, 1, 1];

// let answer = [];

// const lengthN = nums.length;

// let i, j, k;

// function removeDup(arr) {
//   return [...new Set(arr.join("|").split("|"))]
//     .map((v) => v.split(","))
//     .map((v) => v.map((a) => +a));
// }
// if (lengthN < 3) {
//   return answer;
// } else {
//   for (i = 0; i < lengthN - 2; i++) {
//     for (j = i + 1; j < lengthN - 1; j++) {
//       for (k = j + 1; k < lengthN; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           let tmp = [nums[i], nums[j], nums[k]];
//           answer.push(tmp);
//         }
//       }
//     }
//   }

//   answer = answer.map((x) => x.sort());

//   if (answer.length > 0) {
//     let uniqueArr = removeDup(answer);
//     // console.log(uniqueArr);
//     return uniqueArr;
//   } else {
//     return answer;
//   }
// }

// answer = new Set(answer);
// answer = [...answer];

// let uniqueArr = [];
// answer.forEach((element) => {
//   if (!uniqueArr.includes(element)) {
//     uniqueArr.push(element);
//   }
// });
