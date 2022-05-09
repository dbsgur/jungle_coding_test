var isPalindrome = (head) => {
  let arr = [];
  while (head != null) {
    arr.push(head.val);
    head = head.next;
  }
  while (arr.length > 1) {
    if (arr.pop() !== arr.shift()) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome([1, 2]));

// 아니 이게 왜 안돼 ?!
// flag = true;

// while (head.length > 1) {
//   if (head.pop() !== head.shift()) {
//     flag = false;
//     return false;
//   }
// }

// if (flag) {
//   return true;
// } else {
//   return false;
// }
