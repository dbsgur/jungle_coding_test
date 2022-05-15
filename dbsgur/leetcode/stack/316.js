var removeDuplicateLetters = function (s) {
  const stack = [];
  const seen = {};
  const occurence = {};

  for (let j = 0; j < s.length; j++) {
    occurence[s[j]] = j;
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (seen[char]) {
      continue;
    }
    while (
      stack.length > 0 &&
      stack[stack.length - 1] > char &&
      occurence[stack[stack.length - 1]] > i
    ) {
      const tmp = stack.pop();
      seen[tmp] = false;
    }
    seen[char] = true;
    stack.push(char);
  }
  return stack.join("");
};

console.log(removeDuplicateLetters("cbacdcbc"));
