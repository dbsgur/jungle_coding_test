// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // Implement your solution here
  let maxLength = 0;
  for (let right = S.length; right > 0; right--) {
    if (maxLength > right) continue;
    for (let left = 0; left < right; left++) {
      const length = checkValid(S.substr(left, right));
      maxLength = Math.max(maxLength, length);
    }
  }
  return maxLength;
}

function checkValid(stringArray) {
  const counts = {};
  for (let letter of stringArray) {
    if (counts[letter]) counts[letter]++;
    else counts[letter] = 1;
  }

  for (let count in counts) {
    if (counts[count] % 2 !== 0) return 0;
  }
  return stringArray.length;
}
