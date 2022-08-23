// https://school.programmers.co.kr/learn/courses/30/lessons/12923?language=javascript
// 100
function solution(begin, end) {
  return Array.from({ length: end + 1 - begin }, (_, i) => {
    const blockNum = i + begin;
    if (blockNum === 1) return 0;
    for (let j = 2; j <= Math.sqrt(blockNum); j++) {
      if (blockNum % j === 0 && blockNum / j <= 1e7) {
        return blockNum / j;
      }
    }
    return 1;
  });
}
// 효율성 0점
function solution(begin, end) {
  var answer = [];
  for (let i = begin; i <= end; i++) {
    if (i === 1) {
      answer.push(0);
    } else {
      // console.log(find_divisor(i));
      answer.push(find_divisor(i));
    }
  }
  return answer;
}

function find_divisor(num) {
  let divisors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push(i);
      divisors.push(num / i);
    }
  }
  divisors.sort((a, b) => a - b);
  divisors.pop();

  return divisors.pop();
}
