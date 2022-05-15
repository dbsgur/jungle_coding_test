const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, R] = input
  .shift()
  .split(" ")
  .map((x) => +x);

console.log(`N : ${N} M : ${M} R : ${R}`);

const graph = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));
const visited = new Array(N + 1).fill(false);
let i = 0;

for (; i < M; i++) {
  const [start, end] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  graph[start][end] = 1;
}
let answer = new Map();
function bfs(start) {
  visited[start] = true;
  count = 1;
  answer.set(start, count);
  const dq = [];
  dq.push(start, count);
  while (dq.length) {
    [s, c] = dq.shift();
    // bfs로 강해져서 오겠다.
  }
}
