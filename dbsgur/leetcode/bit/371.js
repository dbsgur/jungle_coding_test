/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// 모르겠어요
var getSum = function (a, b) {
  // 2진수 변환
  a = a.toString(2);
  b = b.toString(2);
  console.log(a, b);
  let c = a | b;
  return parseInt(c, 2);
  // or 연산
};

console.log(getSum(2, 3));
