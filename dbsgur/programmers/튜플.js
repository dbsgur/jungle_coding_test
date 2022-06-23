function solution(s) {
  var answer = [];
  s = s.slice(1, -2).replace(/{/g, "").split("},");
  // s = s.map((x) => x.split(",").map((y) => +y));
  s = s.map((x) => x.split(",")).map((x) => new Set(x));
  s.sort((x, y) => x.length - y.length);
  console.log(s);
  // answer.push(+s[0].join(""));
  // for (let tuple of s) {
  //   const LENGTH = answer.length;
  //   if (LENGTH === 0) {
  //     answer.push(s[0].join(""));
  //     continue;
  //   }
  //   // answer에 있는 함수 중 (내림차순으로) 포함되면
  //   // 포함 안되는 원소만 추가
  //   let tup = new Set(tuple);
  //   // console.log(...answer);
  //   let cmp = new Set(answer);
  //   console.log(tup);
  //   console.log(cmp);
  //   console.log(tup - cmp);
  //   answer.push(tup - cmp);
  // }
  return answer;
}

console.log(solution("{{2,1},{2,1,3},{2,1,3,4}, {2}}"));
