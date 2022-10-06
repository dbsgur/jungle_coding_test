function solution(want, number, discount) {
  var answer = 0;
  const info = {};
  for (let i = 0; i < number.length; i++) {
    info[`${want[i]}`] = info[`${want[i]}`] || number[i];
  }
  for (let i = 0; i <= discount.length - 10; i++) {
    let flag = true;
    for (let w of want) {
      if (
        discount.slice(i, i + 10).filter((x) => x === w).length < info[`${w}`]
      ) {
        flag = false;
        break;
      }
    }
    if (flag) answer++;
  }
  return answer;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);

console.log(
  solution(
    ["apple"],
    [10],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ]
  )
);
