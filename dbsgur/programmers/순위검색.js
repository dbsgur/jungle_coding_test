function solution(info, query) {
  //regex
  //query split -> and 제외
  // info 저장 어케할래
  info = info.map((x) => x.split(" "));
  // console.log(info);
  query = query.map((x) => x.split(" ").filter((x) => x !== "and"));
  // console.log(query);
  // query가지고 info를 검색해야한다
  // 아래 방법 시간초과날듯
  // HOW...?

  const answer = [];
  for (let q of query) {
    const visited = new Array(info.length).fill(false);
    for (let i = 0; i < 5; i++) {}
    // filter length
    answer.push(visited.filter((x) => x === true).length);
  }
  return answer;
}

solution(
  [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50",
  ],
  [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150",
  ]
);
