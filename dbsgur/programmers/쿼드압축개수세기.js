// https://school.programmers.co.kr/learn/courses/30/lessons/68936?language=javascript
function solution(arr) {
  const answer = [0, 0];
  function divide(x, y, n) {
    let STAND = arr[x][y];
    if (n === 1) {
      if (STAND === 0) {
        answer[0] += 1;
      } else {
        answer[1] += 1;
      }
      return;
    }
    for (let i = x; i < x + n; i++) {
      for (let j = y; j < y + n; j++) {
        if (arr[i][j] !== STAND) {
          return (
            divide(x, y, n / 2),
            divide(x + n / 2, y, n / 2),
            divide(x, y + n / 2, n / 2),
            divide(x + n / 2, y + n / 2, n / 2)
          );
        }
      }
    }
    if (STAND === 0) {
      answer[0] += 1;
    } else {
      answer[1] += 1;
    }
    return;
  }
  divide(0, 0, arr.length);
  return answer;
}

console.log(
  solution([
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ])
);
