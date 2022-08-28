// https://www.youtube.com/watch?v=aF7jV4lKUd4
function solution(brown, yellow) {
  const S = brown + yellow; // 전체 면적
  const ans = [0, 0];

  // 너비가 큰 순서대로 탐색합니다.
  for (let width = S - 1; width > 0; width--) {
    if (S % width) continue; // 나누어 떨어지지 않을 때 넘어가기

    const height = S / width;
    const y = (width - 2) * (height - 2); // 노란 카펫의 면적
    const b = S - y; // 갈색 카펫의 면적

    // 정답을 찾았을 때
    if (y == yellow && b == brown) {
      ans[0] = width;
      ans[1] = height;
      break;
    }
  }

  return ans;
}
console.log(solution(10, 2));
