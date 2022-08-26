const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, V] = input
  .shift()
  .split(" ")
  .map((x) => +x);

let i = 0;
const graph = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));
for (; i < M; i++) {
  const [x, y] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  graph[x][y] = 1;
  graph[y][x] = 1;
}

function dfs(start) {
  const visited = new Array(N + 1).fill(false);
  let stack = [];
  let answer = [];
  stack.push(start);
  while (stack.length > 0) {
    let s = stack.pop();
    if (!visited[s]) {
      visited[s] = true;
      answer.push(s);
      let next;
      for (next = N; next >= 1; next--) {
        if (!visited[next] && graph[s][next]) {
          stack.push(next);
        }
      }
    }
  }
  console.log(answer.join(" "));
}

let bfs = function (start) {
  const answer = [];
  const visited = new Array(N + 1).fill(false);
  visited[start] = true;
  const dq = [];
  dq.push(start);
  while (dq.length > 0) {
    let s = dq.shift();
    answer.push(s);
    let next = 1;
    for (; next <= N; next++) {
      if (!visited[next] && graph[s][next]) {
        visited[next] = true;
        dq.push(next);
      }
    }
  }
  console.log(answer.join(" "));
};

dfs(V);
bfs(V);
