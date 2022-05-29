function networkDelayTime(times, n, k) {
  const graph = [];

  for (let i = 0; i < n; i++) {
    graph.push(Array(n).fill(Number.MAX_SAFE_INTEGER));
  }

  for (let edge of times) {
    graph[edge[0] - 1][edge[1] - 1] = edge[2];
  }

  const distance = Array(n).fill(Number.MAX_SAFE_INTEGER);
  const visited = Array(n).fill(false);

  distance[k - 1] = 0;

  for (let i = 0; i < n - 1; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    let index;

    for (let i = 0; i < n; i++) {
      if (!visited[i] && distance[i] <= min) {
        min = distance[i];
        index = i;
      }
    }

    visited[index] = true;

    for (let j = 0; j < n; j++) {
      if (visited[j]) {
        continue;
      }

      if (graph[index][j] === Number.MAX_SAFE_INTEGER) {
        continue;
      }

      if (distance[index] === Number.MAX_SAFE_INTEGER) {
        continue;
      }

      const newDistance = distance[index] + graph[index][j];

      if (newDistance < distance[j]) {
        distance[j] = newDistance;
      }
    }
  }

  const max = distance.sort((a, b) => b - a)[0];

  return max !== Number.MAX_SAFE_INTEGER ? max : -1;
}

console.log(
  networkDelayTime(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2
  )
);
