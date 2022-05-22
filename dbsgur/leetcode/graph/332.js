/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  // sort
  tickets.sort();
  const answer = [];
  const visited = new Array(tickets.length).fill(false);
  // dfs
  function bfs(prev) {
    const dq = [];
    dq.push(prev);
    let sl;
    while (dq.length) {
      sl = dq.shift();
    }
  }
  let flag = false;
  for (let i = 0; i < tickets.length; i++) {
    bfs(tickets[i][1], [...tickets[i]]);
    visited[i] = true;
    if (flag) break;
    else {
      visited = new Array(tickets.length).fill(false);
    }
  }
  return answer;
  // console.log(tickets);
};

findItinerary([
  ["MUC", "LHR"],
  ["JFK", "MUC"],
  ["SFO", "SJC"],
  ["LHR", "SFO"],
]);
