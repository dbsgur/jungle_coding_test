function solution(weights) {
  var answer = 0;
  const cals = [1, 3 / 2, 2, 4 / 3];
  weights.sort((a, b) => a - b);
  const store = {};

  while (weights.length > 0) {
    let w = weights.pop();

    cals.forEach((cal) => {
      let c;
      if (((c = cal * w), store[c])) answer += store[c];
    });
    if (!store[w]) store[w] = 1;
    else store[w]++;
    // 시간 초과 -> 이분탐색 x => hash search
    // answer += weights.filter(x=> ws.includes(x)).length
  }
  return answer;
}
