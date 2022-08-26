//https://school.programmers.co.kr/learn/courses/30/lessons/87390?language=javascript
// 100
function solution1(n, left, right) {
  const arr = [];
  for (let idx = left; idx <= right; idx++) {
    let x = idx % n;
    let y = parseInt(idx / n);
    if (x > y) {
      arr.push(x + 1);
    } else {
      arr.push(y + 1);
    }
  }
  return arr;
}
//(signal: aborted (core dumped))
function solution(n, left, right) {
  const arr = [];
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (x > y) {
        arr.push(x + 1);
      } else {
        arr.push(y + 1);
      }
    }
  }
  // console.log(arr);
  return arr.slice(left, right + 1);
}

console.log(solution1(3, 2, 5));
