const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const M = +input.shift();

let i;

const graph = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));
const visited = new Array(N + 1).fill(false);

// console.log(graph);
// console.log(visited);
for (i = 0; i < M; i++) {
  const [v, w] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  graph[v][w] = 1;
  graph[w][v] = 1;
}

function bfs(x) {
  const dq = [];
  dq.push(x);
  visited[x] = true;
  let count = 0;
  while (dq.length) {
    let s = dq.shift();
    for (i = 1; i <= N; i++) {
      if (!visited[i] && graph[s][i]) {
        dq.push(i);
        visited[i] = true;
        count += 1;
      }
    }
  }
  return count;
}

console.log(bfs(1));
