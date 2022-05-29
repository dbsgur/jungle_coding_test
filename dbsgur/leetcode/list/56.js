/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  intervals.sort((a, b) => a[0] - b[0]);
  let start = intervals[0][0];
  let end = intervals[0][1];
  const answer = [];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= end) {
      end = end > intervals[i][1] ? end : intervals[i][1];
      continue;
    } else {
      answer.push([start, end]);
      start = intervals[i][0];
      end = intervals[i][1];
    }
  }
  answer.push([start, end]);
  return answer;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
