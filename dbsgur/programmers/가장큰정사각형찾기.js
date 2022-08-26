// https://school.programmers.co.kr/learn/courses/30/lessons/12905?language=javascript
// 100
function solution(board) {
  let max = 0;
  let x = board.length;
  let y = board[0].length;

  if (x <= 1 || y <= 1) return 1;

  for (let i = 1; i < x; i++) {
    for (let j = 1; j < y; j++) {
      if (board[i][j] >= 1) {
        let min = Math.min(
          board[i - 1][j],
          board[i - 1][j - 1],
          board[i][j - 1]
        );

        board[i][j] = min + 1;
        max = Math.max(max, min + 1);
      }
    }
  }

  return max * max;
}
// 효율성 0
function solution(board) {
  let max = 0;
  let x = board.length;
  let y = board[0].length;

  if (x <= 1 || y <= 1) return 1;

  for (let i = 1; i < x; i++) {
    for (let j = 1; j < y; j++) {
      if (board[i][j] >= 1) {
        let min = Math.min(
          board[i - 1][j],
          board[i - 1][j - 1],
          board[i][j - 1]
        );
        board[i][j] = min + 1;
      }
    }
  }

  return Math.max(...board.flat()) ** 2;
}
// 28.2 T.T
function solution(board) {
  let dp = [...board];
  // 하 우 우하대각
  const dx = [1, 0, 1];
  const dy = [0, 1, 1];
  const COL = board.length;
  const ROW = board[0].length;
  for (let x = 0; x < COL; x++) {
    for (let y = 0; y < ROW; y++) {
      if (board[x][y] === 0) continue;
      if (x + 1 >= COL || y + 1 >= ROW) continue;
      let flag = true;
      for (let i = 0; i < 3; i++) {
        if (board[x + dx[i]][y + dy[i]] === 0) flag = false;
      }
      if (flag) board[x + 1][y + 1] = board[x][y] + 1;
    }
  }
  // console.log(dp)
  // console.log(Math.max(...dp.flat(1))**2);
  return Math.max(...dp.flat(1)) ** 2;
}
