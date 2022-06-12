/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const gap = [];
  for (let i = 0; i < gas.length; i++) {
    gap.push(gas[i] - cost[i]);
  }
  if (gap.reduce((sum, curr) => sum + curr) < 0) return -1;
  let idx = 0;
  while (true) {
    if (gap[idx] < 0) {
      idx++;
      continue;
    }
    let tmp = 0;
    for (let i = idx; i < gap.length; i++) {
      tmp += gap[i];
      if (tmp < 0) {
        idx++;
        break;
      }
    }
    if (tmp >= 0) {
      break;
    }
    // else break;
  }
  return idx;
};

console.log(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6]));
