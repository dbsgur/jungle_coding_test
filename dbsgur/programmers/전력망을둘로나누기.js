// https://school.programmers.co.kr/learn/courses/30/lessons/86971?language=javascript

function solution(n, wires) {
  const graph = Array.from(Array(n + 1), () => new Array(n + 1).fill(0));
  for (let wire of wires) {
    graph[wire[0]][wire[1]] = 1;
    graph[wire[1]][wire[0]] = 1;
  }
  function dfs(start) {
    let visited = new Array(n + 1).fill(false);
    let count = 1;
    let stack = [start];
    visited[start] = true;
    while (stack.length > 0) {
      let top = stack.pop();
      for (let [idx, connect] of graph[top].entries()) {
        if (visited[idx] === false && connect === 1) {
          stack.push(idx);
          visited[idx] = true;
          count++;
        }
      }
    }
    return count;
  }
  const origin = dfs(1);
  let answer = 1e9;
  for (let wire of wires) {
    graph[wire[0]][wire[1]] = 0;
    graph[wire[1]][wire[0]] = 0;
    let tmp = dfs(1);
    let diff = Math.abs(tmp - (origin - tmp));
    answer = diff < answer ? diff : answer;
    graph[wire[0]][wire[1]] = 1;
    graph[wire[1]][wire[0]] = 1;
  }
  return answer;
}
console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
