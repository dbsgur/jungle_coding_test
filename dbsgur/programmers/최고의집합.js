function solution(n, s) {
  if (n > s) return [-1];
  var answer = [];
  for (let i = 0; i < n; i++) {
    const number = Math.floor(s / (n - i));
    answer.push(number);
    s -= number;
  }

  return answer;
}
