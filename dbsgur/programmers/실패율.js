function solution(N, stages) {
  var answer = [];
  for (let i = 1; i <= N; i++) {
    answer.push([
      i,
      stages.filter((el) => el === i).length /
        stages.filter((el) => el >= i).length,
    ]);
  }
  answer.sort((a, b) => b[1] - a[1]);
  return answer.map((el) => el[0]);
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
