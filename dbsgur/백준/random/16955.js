// 어렵다! 다시 풀자!

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((x) => x.split(""));

// 상 하 좌 우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let visited = Array.from(Array(10), () => new Array(10).fill(false));

function bfs(x, y) {
  const dq = [];
  let i;
  // visited[x][y] = true;
  dq.push([x, y, 0]);
  while (dq.length) {
    [cx, cy, c] = dq.shift();
    if (c === 4) {
      return true;
    }
    for (i = 0; i < 4; i++) {
      let nx = cx + dx[i];
      let ny = cy + dy[i];
      if (nx < 0 || ny < 0 || nx >= 10 || ny >= 10) {
        continue;
      }
      if (input[nx][ny] === "X") {
        dq.push([nx, ny, c + 1]);
      }
    }
  }
}

console.log(input);
