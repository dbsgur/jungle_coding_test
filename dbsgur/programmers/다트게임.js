//
//
//
//

function solution(dartResult) {
  const answer = [];
  for (let dart of dartResult) {
    console.log(answer);
    if (dart === "S") continue;
    else if (dart === "D") answer.push(1 * answer.pop() ** 2);
    else if (dart === "T") answer.push(1 * answer.pop() ** 3);
    else if (dart === "#") answer.push(1 * answer.pop() * -1);
    else if (dart === "*") {
      let top = 1 * answer.pop();
      let tmp = 1 * answer.pop();
      answer.push(tmp * 2);
      answer.push(top * 2);
    } else {
      answer.push(1 * dart);
    }
  }

  return answer.reduce((curr, sum) => curr + sum);
}

console.log(solution("1S2D*3T"));
