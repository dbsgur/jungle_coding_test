function correct_check(u) {
  // u = [...u];
  if (!u) return true;
  let chk = 0;
  for (let i = 0; i < u.length; i++) {
    if (u[i] === "(") chk++;
    else chk--;
    if (chk < 0) return false;
  }
  return true;
}
function balance_check(u) {
  // u = [...u];
  if (!u) return u;
  let chk = 0;
  for (let i = 0; i < u.length; i++) {
    if (u[i] === "(") chk++;
    else chk--;
    if (chk === 0) return u;
  }
}
function reverse(u) {
  u = u.split("");
  for (let i = 0; i < u.length; i++) {
    if (u[i] === "(") u[i] = ")";
    else u[i] = "(";
  }
  return u.join("");
}

function solution(p) {
  if (correct_check(p)) return p;
  var answer = "";
  let u, v;
  if (p.length === 0) return answer;
  for (let i = 2; i <= p.length; i += 2) {
    // console.log(`sub str : ${p.substr(0, i)}`);
    // console.log("======");
    if (balance_check(p.substr(0, i))) {
      u = p.substr(0, i);
      v = p.substr(i);
      break;
    }
  }
  // console.log(u);
  // console.log(v);
  if (correct_check(u)) answer = u + solution(v);
  else {
    answer += "(";
    answer += solution(v);
    answer += ")";
    u = reverse(u.substr(1, u.length - 2));
    answer += u;
  }
  return answer;
}

console.log(solution("()))((()"));
