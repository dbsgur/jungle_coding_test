/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  const map = {};

  // Build map
  for (const num of nums) {
    if (!(num in map)) map[num] = 0;
    map[num]++;
  }

  let cur = 0;

  // Rebuild array from map
  for (let i = 0; i < nums.length; i++) {
    while (!(cur in map) || map[cur] <= 0) {
      cur++;
    }

    map[cur]--;

    nums[i] = cur;
  }
};
