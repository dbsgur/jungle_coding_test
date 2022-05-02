let nums = [0, 1, 1];

let answer = [];

const lengthN = nums.length;

let i, j, k;

if (lengthN < 3) {
  return answer;
} else {
  for (i = 0; i < lengthN - 2; i++) {
    for (j = i + 1; j < lengthN - 1; j++) {
      for (k = j + 1; k < lengthN; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let tmp = [nums[i], nums[j], nums[k]];
          answer.push(tmp);
        }
      }
    }
  }
  answer = answer.map((x) => x.sort());
  function removeDup(arr) {
    return [...new Set(arr.join("|").split("|"))]
      .map((v) => v.split(","))
      .map((v) => v.map((a) => +a));
  }

  let uniqueArr = removeDup(answer);
  console.log(uniqueArr);
  return uniqueArr;
}

// answer = new Set(answer);
// answer = [...answer];

// let uniqueArr = [];
// answer.forEach((element) => {
//   if (!uniqueArr.includes(element)) {
//     uniqueArr.push(element);
//   }
// });
