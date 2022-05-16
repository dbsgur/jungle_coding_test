const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, R] = input
  .shift()
  .split(" ")
  .map((x) => +x);

// console.log(`N : ${N} M : ${M} R : ${R}`);

const graph = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));
const visited = new Array(N + 1).fill(false);
let i = 0;

for (; i < M; i++) {
  const [start, end] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  graph[start][end] = 1;
  graph[end][start] = 1;
}
let answer = [];
console.log(graph);
function bfs(start) {
  visited[start] = true;
  count = 1;
  // answer.set(start, count);
  answer.push([start, count]);
  const dq = [];
  const ans = [];
  dq.push([start, count]);
  while (dq.length) {
    let [s, c] = dq.shift();
    // console.log(`s : ${s} c : ${c}`);
    console.log(s);
    ans[s] = s;
    answer.push([s, c]);
    let i = 0;
    for (; i <= N; i++) {
      if (graph[s][i] && !visited[i]) {
        dq.push([i, c + 1]);
        visited[i] = true;
      }
    }
    // bfs로 강해져서 오겠다.
  }
  console.log(ans.slice(1).join("\n"));
}

bfs(R);

console.log(answer);
