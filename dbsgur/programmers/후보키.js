//
//
//
function judge(relation) {
  const LENGTH = relation.length;
  const LENGTHIN = relation[0].length;
  for (let i = 0; i < LENGTHIN; i++) {
    const set1 = new Set();
    for (let j = 0; j < LENGTH; j++) {
      set1.add(relation[j][i]);
    }
    if (set1.size === LENGTH) {
      return true;
    }
  }
  return false;
}
function solution(relation) {
  var answer = 0;
  // const LENGTH = relation.length;
  // const LENGTHIN = relation[0].length;
  // for (let i = 0; i < LENGTHIN; i++) {
  //   const set1 = new Set();
  //   for (let j = 0; j < LENGTH; j++) {
  //     set1.add(relation[j][i]);
  //   }
  //   if (set1.size === LENGTH) {
  //     answer++;
  //   }
  // }
  return answer;
}
console.log(
  solution([
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"],
  ])
);
