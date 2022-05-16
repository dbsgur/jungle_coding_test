const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((x) => +x);

input = input.map((x) => x.split("").map((x) => +x));

function bfs(x, y) {
  const dq = [];
  // let count = 0;
  dq.push([x, y, 1]);
  let i;
  // 상 하 좌 우
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  while (dq.length) {
    [sx, sy, count] = dq.shift();
    if (sx === N - 1 && sy === M - 1) {
      return count;
    }
    for (i = 0; i < N; i++) {
      let nx = sx + dx[i];
      let ny = sy + dy[i];
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (input[nx][ny] === 1) {
        dq.push([nx, ny, count + 1]);
        input[sx][sy] = 0;
      }
    }
  }
}

console.log(bfs(0, 0));
