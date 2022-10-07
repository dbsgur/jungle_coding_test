function solution(N, road, K) {
  var answer = 0;
  // 다익스트라
  const dq = [];
  const costs = [0, 0];
  for (let [s, e, c] of road) {
    if (s === 1) {
      costs[e] = c;
      dq.push([e, c]);
    }
  }
  while (dq.length > 0) {
    let [mid, cost] = dq.shift();
    for (let [s, e, c] of road) {
      if (s === mid) {
      }
    }
  }
  return answer;
}

solution(
  5,
  [
    [1, 2, 1],
    [2, 3, 3],
    [5, 2, 2],
    [1, 4, 2],
    [5, 3, 1],
    [5, 4, 2],
  ],
  3
);
