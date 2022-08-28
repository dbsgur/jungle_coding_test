// https://school.programmers.co.kr/learn/courses/30/lessons/1844?language=javascript

function solution(maps) {
  // 상 하 좌 우
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const N = maps[0].length; // row y
  const M = maps.length; // col x
  function bfs() {
    const dq = [];
    dq.push([0, 0, 1]);
    maps[0][0] = 0;
    while (dq.length > 0) {
      let [x, y, c] = dq.shift();

      for (let i = 0; i < 4; i++) {
        let nx = dx[i] + x;
        let ny = dy[i] + y;
        if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;

        if (maps[nx][ny] === 1) {
          if (nx === M - 1 && ny === N - 1) {
            return c + 1;
          }
          dq.push([nx, ny, c + 1]);
          maps[nx][ny] = 0;
        }
      }
    }
    return -1;
  }
  return bfs();
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
