// 다시
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N, K] = input
  .shift()
  .split(" ")
  .map((x) => +x);

let i = 0;
let j;
const graph = Array.from(Array(M), () => new Array(N).fill(0));

for (; i < K; i++) {
  let [sx, sy, ex, ey] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  sx = M - sx - 1;
  ex = M - ex - 1;
  for (i = sx; i <= ex; i++) {
    for (j = ex; j <= ex; j++) {
      graph[i][j] = 1;
    }
  }
}

function dfs(x, y) {
  const stack = [];
  stack.push([x, y]);
  graph[x][y] = 1;
  let area = 1;
  // 상 하 좌 우
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  while (stack.length) {
    let [sx, sy] = stack.pop();
    for (i = 0; i < 4; i++) {
      let nx = sx + dx[i];
      let ny = sy + dy[i];
      // if(nx < 0 || ny < 0 || nx >= M )
    }
  }
}
