/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  function distance(point) {
    return point[0] ** 2 + point[1] ** 2;
  }
  for (let point of points) {
    point.push(distance(point));
  }
  points.sort((a, b) => a[2] - b[2]);
  const answer = [];
  for (let i = 0; i < k; i++) {
    answer.push([points[i][0], points[i][1]]);
  }
  return answer;
};

console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1
  )
);
