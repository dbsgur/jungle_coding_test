/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// topology sort
var canFinish = function (numCourses, prerequisites) {
  const indgree = new Array(numCourses).fill(0);
  // const graph = Array.from(Array(numCourses), () => new Array(numCourses));
  const graph = Array.from(Array(numCourses), () => new Array());
  for (let pre of prerequisites) {
    // graph[pre[1]] = graph[pre[0]];
    let start = pre[1];
    let end = pre[0];
    graph[start].push(end);
    indgree[end] += 1;
  }
  function topology() {
    const result = [];
    const dq = [];
    for (let i = 0; i < numCourses; i++) {
      if (indgree[i] === 0) {
        dq.push(i);
      }
    }
    while (dq.length) {
      let node = dq.shift();
      result.push(node);
      for (let next of graph[node]) {
        indgree[next] -= 1;
        if (indgree[next] == 0) {
          dq.push(next);
        }
      }
    }
    for (let ind of indgree) {
      if (ind > 0) {
        return false;
      }
    }
    return true;
  }
  return topology();
};

console.log(canFinish(2, [[1, 0]]));
