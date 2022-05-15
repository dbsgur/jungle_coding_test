// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  s = s.split("");
  let tmp;
  while (s.length > 0) {
    tmp = s.pop();
    switch (tmp) {
      case ")":
        stack.push(0);
        break;
      case "}":
        stack.push(1);
        break;
      case "]":
        stack.push(2);
        break;
      case "(":
        if (stack.pop() === 0) {
          break;
        }
        return false;
      case "{":
        if (stack.pop() === 1) {
          break;
        }
        return false;
      case "[":
        if (stack.pop() === 2) {
          break;
        }
        return false;
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
};

console.log(isValid("()"));
// wrong solved
// var isValid = function (s) {
//   s = s.split("");
//   console.log(s);
//   while (s.length !== 0) {
//     switch (s.pop()) {
//       case ")":
//         if (s.shift() === "(") {
//           continue;
//         } else {
//           return false;
//         }
//       case "}":
//         if (s.shift() === "{") {
//           continue;
//         } else {
//           return false;
//         }
//       case "]":
//         if (s.shift() === "[") {
//           continue;
//         } else {
//           return false;
//         }
//     }
//   }
//   return true;
// };

// console.log(isValid("(]"));
