function solution(n, arr1, arr2) {
  var answer = [];
  arr1 = arr1.map((x) => x.toString(2).padStart(n, 0));
  arr2 = arr2.map((x) => x.toString(2).padStart(n, 0));
  console.log(arr1);
  console.log(arr2);
  for (let i = 0; i < n; i++) {
    let tmp = [];
    for (let j = 0; j < n; j++) {
      if ((arr1[i][j] === "1") | (arr2[i][j] === "1")) tmp.push("#");
      else tmp.push(" ");
    }
    answer.push(tmp.join(""));
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
