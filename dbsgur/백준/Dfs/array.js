const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 합계 구하기
let answer = arr.reduce((sum, currValue) => sum + currValue);

console.log(answer);

// 홀수만 구하기
let answer2 = [];
arr.forEach((element) => {
  if (element % 2 == 1) {
    answer2.push(element);
  }
});

console.log(answer2);

// 2중 배열
arr = Array.from(Array(5), () => Array(2).fill(0));
