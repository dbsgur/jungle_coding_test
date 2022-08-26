//https://school.programmers.co.kr/learn/courses/30/lessons/49993?language=javascript#fnref1

function solution(skill, skill_trees) {
  function isCorrect(n) {
    // const test = '[' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter(v => !skill.includes(v)).join('') + ']*';
    let test = skill.split("");
    for (var i = 0; i < n.length; i++) {
      if (!skill.includes(n[i])) continue;
      if (n[i] === test.shift()) continue;
      return false;
    }
    return true;
  }

  return skill_trees.filter(isCorrect).length;
}
// 오답
function solution(skill, skill_trees) {
  let answer = 0;
  for (let skill_tree of skill_trees) {
    if (confirm_skill(skill, skill_tree)) answer++;
  }
  return answer;
}

function confirm_skill(skill, skill_tree) {
  let start = 0;
  // const SKILLTREELENGTH = skill_tree.length;
  for (let sk of skill) {
    let index_of = skill_tree.indexOf(sk);
    console.log(index_of);
    if (index_of === -1) continue;
    if (index_of < start) return false;
    start = index_of;
  }
  console.log(skill_tree);
  return true;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
