// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // Implement your solution here
  const stringN = N.toString();
  let maxValue = -1e9;

  for (let i = 0; i < stringN.length; i++) {
    if (stringN[i] === "5") {
      let value = parseInt(stringN.slice(0, i) + stringN.slice(i + 1));
      maxValue = Math.max(maxValue, value);
    }
  }

  return maxValue;
}
