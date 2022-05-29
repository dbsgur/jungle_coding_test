/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  let cost = Array(n).fill(Infinity),
    ans = Infinity;

  cost[src] = 0;

  for (let t = 1; t <= k + 1; t++) {
    const graph = Array(n).fill(Infinity);

    for (const flight of flights) {
      const [s, e, c] = flight;
      graph[e] = Math.min(graph[e], cost[s] + c);
    }
    cost = graph;
    ans = ans < cost[dst] ? ans : cost[dst];
  }
  return ans === Infinity ? -1 : ans;
};

console.log(
  findCheapestPrice(
    5,
    [
      [1, 2, 10],
      [2, 0, 7],
      [1, 3, 8],
      [4, 0, 10],
      [3, 4, 2],
      [4, 2, 10],
      [0, 3, 3],
      [3, 1, 6],
      [2, 4, 5],
    ],
    0,
    4,
    1
  )
);
//
var findCheapestPrice = function (n, flights, src, dst, K) {
  if (n === 1 || src === dst) {
    return 0;
  }

  let graph = new Map();
  let destinationPrice = new Array(n).fill(Infinity);

  for (value of flights) {
    const [source, desti, price] = value;

    graph.set(source, (graph.get(source) || new Set()).add([desti, price]));
  }

  let queue = [];

  queue.push([src, 0]);
  queue.unshift(["*", "*"]);

  while (queue.length > 0 && K >= -1) {
    const [node, price] = queue.pop();

    if (node === "*") {
      K -= 1;
      if (queue.length > 0) {
        queue.unshift(["*", "*"]);
      }
    } else {
      if (destinationPrice[node] > price) {
        destinationPrice[node] = price;

        if (graph.has(node)) {
          for (let neighbors of graph.get(node)) {
            const [desti, destiPrice] = neighbors;

            queue.unshift([desti, price + destiPrice]);
          }
        }
      }
    }
  }

  return destinationPrice[dst] === Infinity ? -1 : destinationPrice[dst];
};
