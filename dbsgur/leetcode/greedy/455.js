/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let count = 0;
  let gc = 0;
  let sc = 0;
  while (true) {
    if (sc > s.length) {
      break;
    }
    if (g[gc] <= s[sc]) {
      count++;
      gc++;
      sc++;
    } else {
      sc++;
    }
  }
  return count;
};

console.log(findContentChildren([1, 2, 3], [1, 1]));
