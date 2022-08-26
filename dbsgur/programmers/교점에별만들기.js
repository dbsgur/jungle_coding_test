//https://school.programmers.co.kr/learn/courses/30/lessons/87377?language=javascript

function solution(line) {
  const N = line.length;
  const INF = Number.MAX_SAFE_INTEGER;
  const crossPoints = [];
  let minX = INF;
  let minY = INF;
  let maxX = -INF;
  let maxY = -INF;

  // 계획1 - 문제에 나온 공식대로 모든 정수 교차점과 좌표의 최대/최솟값을 구합니다.
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      const [a, b, e] = line[i];
      const [c, d, f] = line[j];

      const mod = a * d - b * c;
      if (!mod) continue; // 분모가 0인 경우 -> 서로 평행하거나 일치

      const xNumerator = b * f - e * d;
      const yNumerator = e * c - a * f;
      if (xNumerator % mod || yNumerator % mod) continue; // 정수가 아닌 교차점

      const x = xNumerator / mod;
      const y = yNumerator / mod;

      crossPoints.push([x, y]); // 교차점 추가
      minX = Math.min(minX, x); // 좌표 최대/최솟값 갱신
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  }

  // 계획2 - 너비와 높이를 계산 후, 별을 찍습니다.
  const paper = [...Array(maxY - minY + 1)].map(() =>
    [...Array(maxX - minX + 1)].map(() => ".")
  );

  crossPoints.forEach(([x, y]) => {
    paper[maxY - y][x - minX] = "*";
  });

  return paper.map((v) => v.join(""));
}
