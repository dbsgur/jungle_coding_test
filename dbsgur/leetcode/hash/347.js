/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const frequent = new Map();
  let num;
  for (num of nums) {
    frequent.set(num, frequent.get(num) ? frequent.get(num) + 1 : 1);
  }
  console.log(frequent);
  const answer = [...frequent]
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => k)
    .slice(0, k);
  // const answer = [...frequent].sort((a, b) => b[1] - a[1]).slice(k);
  return answer;
};

console.log(topKFrequent([1, 2, 2], 2));

// discuss solved
var topKFrequent2 = function (nums, k) {
  const hash = nums.reduce((res, x) => {
    if (!res[x]) {
      res[x] = 0;
    }
    res[x]++;
    return res;
  }, {});

  return Object.keys(hash)
    .sort((a, b) => hash[b] - hash[a])
    .filter((x, i) => i < k)
    .map((x) => parseInt(x));
};
