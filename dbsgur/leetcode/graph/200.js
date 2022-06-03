/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // grid = grid.map((x) => [...x]);
  // return grid[0].length;
  // 상하 좌우
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const maxX = grid.length - 1,
    maxY = grid[0].length - 1;
  // dfs
  function dfs(startX, startY) {
    grid[startX][startY] = "0";
    for (let i = 0; i < 4; i++) {
      nx = dx[i] + startX;
      ny = dy[i] + startY;
      if (nx < 0 || ny < 0 || nx > maxX || ny > maxY) {
        continue;
      }
      if (grid[nx][ny] === "1") {
        dfs(nx, ny);
      }
    }
  }
  let x = 0,
    y = 0,
    count = 0;
  for (x = 0; x <= maxX; x++) {
    for (y = 0; y <= maxY; y++) {
      if (grid[x][y] === "1") {
        dfs(x, y);
        count++;
      }
    }
  }
  return count;
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
