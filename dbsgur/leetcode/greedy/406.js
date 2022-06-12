/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = (people) => {
  people.sort((a, b) => b[0] - a[0] || (b[0] === a[0] && a[1] - b[1]));
  console.log(people);
  const res = [];
  for (let person of people) {
    const [height, k] = person;
    res.splice(k, 0, person);
  }
  return res;
};
console.log(
  reconstructQueue([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ])
);
