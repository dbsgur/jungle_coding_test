// let bfs = function (x, y) {
//   dx = [-1, 1, 0, 0];
//   dy = [0, 0, -1, 1];
//   grid[x][y] = 0;
//   // visited[x][y] = true;
//   let dq = [];
//   dq.push([x, y]);
//   while (dq.length) {
//     [sx, sy] = dq.shift();
//     for (i = 0; i < 4; i++) {
//       let nx = sx + dx[i];
//       let ny = sy + dy[i];
//       if (nx < 0 || ny < 0 || nx > xLength || ny > yLength) continue;
//       if (grid[nx][ny] === "1") {
//         dq.push([nx, ny]);
//         grid[nx][ny] = 0;
//       }
//     }
//   }
// };

var numIslands = function (grid) {
  const xLength = grid.length;
  const yLength = grid[0].length;
  let i, j;
  let count = 0;
  let bfs = function (x, y) {
    dx = [-1, 1, 0, 0];
    dy = [0, 0, -1, 1];
    grid[x][y] = 0;
    // visited[x][y] = true;
    let dq = [];
    dq.push([x, y]);
    while (dq.length) {
      [sx, sy] = dq.shift();
      for (i = 0; i < 4; i++) {
        let nx = sx + dx[i];
        let ny = sy + dy[i];
        if (nx < 0 || ny < 0 || nx > xLength || ny > yLength) continue;
        if (grid[nx][ny] === "1") {
          dq.push([nx, ny]);
          grid[nx][ny] = 0;
        }
      }
    }
  };
  for (i = 0; i < xLength; i++) {
    for (j = 0; j < yLength; j++) {
      if (grid[i][j] === "1") {
        bfs(i, j);
        count += 1;
      }
    }
  }
  return count;
};

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
