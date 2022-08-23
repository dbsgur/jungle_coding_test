function solution(land) {
  var answer = 0;
  const COL = land.length;
  const ROW = land[0].length;
  const dp = Array.from(Array(COL + 1), () => new Array(ROW + 1).fill(0));

  for (let y = 1; y <= COL; y++) {
    for (let x = 1; x <= ROW; x++) {
      let tmp = dp[y - 1].filter((v, i) => i !== x);
      dp[y][x] = land[y - 1][x - 1] + Math.max(...tmp);
    }
  }

  return Math.max(...dp[COL]);
}
