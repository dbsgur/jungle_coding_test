// https://leetcode.com/problems/daily-temperatures/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// https://leetcode.com/problems/daily-temperatures/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let lengthT = temperatures.length;
  let start = 0;
  let end = 1;
  let answer = [];
  while (end !== lengthT) {
    if (temperatures[start] >= temperatures[end]) {
      end++;
      if (end === lengthT) {
        answer.push(0);
        start++;
        end = start + 1;
      }
      continue;
    } else {
      answer.push(end - start);
      start++;
      end = start + 1;
    }
  }
  answer.push(0);
  return answer;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
