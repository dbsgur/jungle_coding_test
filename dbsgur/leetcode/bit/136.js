/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let numbers = new Set();
  for (let num of nums) {
    if (!numbers.delete(num)) {
      numbers.add(num);
    }
  }
  return [...numbers][0];
};
console.log(singleNumber([2, 2, 1]));
