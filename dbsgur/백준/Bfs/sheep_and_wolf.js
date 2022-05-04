function solution(info, edges) {
  let answer = 1;
  const length = info.length;
  const graph = Array.from({ length }, () => []);

  const dfs = (current, nextNodes) => {
    let [currentNode, sheep, wolves] = current;
    const newNextNodes = [...nextNodes];
    const index = newNextNodes.indexOf(currentNode);

    sheep += !info[currentNode];
    wolves += info[currentNode];
    answer = Math.max(answer, sheep);

    if (sheep === wolves) {
      return;
    }

    if (graph[currentNode].length) {
      newNextNodes.push(...graph[currentNode]);
    }
    newNextNodes.splice(index, 1);

    for (const nextNode of newNextNodes) {
      dfs([nextNode, sheep, wolves], newNextNodes);
    }
  };

  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i];

    graph[from].push(to);
  }

  dfs([0, 0, 0], [0]);

  return answer;
}
// function solution(info, edges) {
//   var answer = 0;
//   let i;
//   const lengthI = info.length;
//   let graph = Array.from(Array(lengthI), () => Array(lengthI).fill(0));
//   let visited = Array.from(Array(lengthI).fill(false));
//   for (i = 0; i < lengthI - 1; i++) {
//     graph[edges[i][0]][edges[i][1]] = 1;
//     graph[edges[i][1]][edges[i][0]] = 1;
//   }
//   let dq = [];

//   console.log(graph);
//   return answer;
// }

// // 12
// const info = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0];
// // 11
// const edges = [
//   [0, 1],
//   [0, 2],
//   [1, 3],
//   [1, 4],
//   [2, 5],
//   [2, 6],
//   [3, 7],
//   [4, 8],
//   [6, 9],
//   [9, 10],
// ];
// solution(info, edges);
