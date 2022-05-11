const s1 = [];
const s2 = [];

while (l1) {
  s1.push(l1.val);
  l1 = l1.next;
}

while (l2) {
  s2.push(l2.val);
  l2 = l2.next;
}

const n1 = BigInt(s1.reverse().join(""));
const n2 = BigInt(s2.reverse().join(""));
const n3 = n1 + n2;
const s3 = n3
  .toString()
  .split("")
  .reverse()
  .map((x) => parseInt(x));

let head;
let prev;

for (let n of s3) {
  const node = new ListNode(n);

  if (prev) {
    prev.next = node;
  }

  prev = node;

  if (!head) {
    head = node;
  }
}

return head || null;
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */

// const { link } = require("fs");

// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// // 시간초과 ...
// var addTwoNumbers = function (l1, l2) {
//   let num1 = 0;
//   let num2 = 0;
//   let digit1 = 1;
//   let digit2 = 1;
//   while (l1.next !== null) {
//     if (l1.val === 0) {
//       continue;
//     }
//     num1 = digit1 * l1.val + num1;
//     digit1 *= 10;
//     l1 = l1.next;
//   }
//   num1 = digit1 * l1.val + num1;
//   while (l2.next !== null) {
//     if (l2.val === 0) {
//       continue;
//     }
//     num2 = digit2 * l2.val + num2;
//     digit2 *= 10;
//     l2 = l2.next;
//   }
//   num2 = digit2 * l2.val + num2;
//   let resultNum = String(num1 + num2);
//   const lengthN = resultNum.length;
//   let linkedList = [...resultNum].reverse().map((x) => +x);
//   let headNode = { val: "0", next: "null" };
//   let curr = headNode;
//   linkedList.map((el) => {
//     let node = { val: el, next: null };
//     curr.next = node;
//     curr = curr.next;
//   });
//   return headNode.next;
// };
