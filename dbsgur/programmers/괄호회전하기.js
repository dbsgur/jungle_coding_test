function solution(s) {
  s = [...s];
  var answer = 0;
  const brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let i = 0; i < s.length; i++) {
    if (confirm(s)) {
      answer++;
    }
    s.push(s.shift());
  }
  function confirm(str) {
    const stack = [];
    for (let j = 0; j < str.length; j++) {
      if (brackets[str[j]] === undefined) {
        stack.push(str[j]);
      } else {
        if (stack[stack.length - 1] !== brackets[str[j]]) return false;
        stack.pop();
      }
    }
    if (stack.length) {
      return false;
    }
    return true;
  }

  return answer;
}
