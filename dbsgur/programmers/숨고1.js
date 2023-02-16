// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, K) {
  // Implement your solution here
  const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const index = (week.indexOf(S) + K) % 7;

  return week[index];
}
