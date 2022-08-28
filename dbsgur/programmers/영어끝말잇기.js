// https://school.programmers.co.kr/learn/courses/30/lessons/12981?language=javascript
function solution(n, words) {
  // const answer = [0, 0];
  const LENGTH = words.length;
  const overlap_check = new Set();
  let flag = true;
  let count;
  let prev_word;
  for (count = 0; count < LENGTH; count++) {
    if (overlap_check.has(words[count])) {
      flag = false;
      break;
    }
    if (count === 0) {
      overlap_check.add(words[count]);
      prev_word = words[count];
    } else {
      if (prev_word[prev_word.length - 1] === words[count][0]) {
        overlap_check.add(words[count]);
        prev_word = words[count];
      } else {
        flag = false;
        break;
      }
    }
  }
  if (flag) {
    return [0, 0];
  } else {
    console.log(count);
    return [(count % n) + 1, parseInt(count / n) + 1];
  }
}

console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);
