/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1 || n === 2) {
    return 1;
  } else if (n === 0) {
    return 0;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
};

// discuss 풀이

const climbStairs2 = (n) => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 3;

  let a = 0;
  let b = 2;
  let c = 3;

  for (let i = 3; i < n; i++) {
    a = b;
    b = c;
    c = a + b;
  }

  return c;
};
