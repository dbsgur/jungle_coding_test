// https://school.programmers.co.kr/learn/courses/30/lessons/70129?language=javascript

function solution(s) {
  let answer = 0;
  let count = 0;
  while (s !== "1") {
    answer++;
    [s, cnt] = change_binary(s);
    count += cnt;
    s = s.length.toString(2);
  }
  return [answer, count];
}

function change_binary(original) {
  const change_bin = original.replace(/0/g, "");
  original = [...original];
  const count_zero = original.filter((x) => x === "0").length;
  return [change_bin, count_zero];
}

console.log(solution("110010101001"));
