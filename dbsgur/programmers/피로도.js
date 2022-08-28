// https: school.programmers.co.kr/learn/courses/30/lessons/87946?language=javascript

function solution(k, dungeons) {
  let N = dungeons.length;
  let visited = new Array(N).fill(0);
  let answer = 0;
  dfs(k, 0, dungeons);
  function dfs(k, cnt, dungeons) {
    if (cnt > answer) {
      answer = cnt;
    }
    for (let j = 0; j < N; j++) {
      if (k >= dungeons[j][0] && !visited[j]) {
        visited[j] = 1;
        dfs(k - dungeons[j][1], cnt + 1, dungeons);
        visited[j] = 0;
      }
    }
  }
  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
