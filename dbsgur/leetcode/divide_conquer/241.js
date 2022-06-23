/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  let nums = expression.split(/\D/g);
  let operations = expression.split(/\d/g);
  operations.pop();
  operations.shift();
  const result = [];
  function calculation(n, o) {}
  for (let i = 0; i < operations.length; i++) {}
};

console.log(diffWaysToCompute("2-1-1"));
