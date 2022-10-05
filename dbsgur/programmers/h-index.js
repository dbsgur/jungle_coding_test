function solution(citations) {
  var answer = 0;
  citations.sort((a, b) => b - a);
  const LENGTH = citations.length;
  for (let i = 0; i < LENGTH; i++) {
    if (i < citations[i]) {
      answer++;
    }
  }
  return answer;
}
