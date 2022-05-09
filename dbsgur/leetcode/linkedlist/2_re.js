/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 시간초과 ...
var addTwoNumbers = function (l1, l2) {
  let num1 = 0;
  let num2 = 0;
  let digit1 = 1;
  let digit2 = 1;
  while (l1.next !== null) {
    if (l1.val === 0) {
      digit1 *= 10;
      continue;
    }
    num1 = digit1 * l1.val + num1;
    digit1 *= 10;
    l1 = l1.next;
  }
  num1 = digit1 * l1.val + num1;
  while (l2.next !== null) {
    if (l2.val === 0) {
      digit2 *= 10;
      continue;
    }
    num2 = digit2 * l2.val + num2;
    digit2 *= 10;
    l2 = l2.next;
  }
  num2 = digit2 * l2.val + num2;
  let resultNum = String(num1 + num2);
  let linkedList = [...resultNum].reverse().map((x) => +x);
  let headNode = { val: "0", next: "null" };
  let curr = headNode;
  linkedList.map((el) => {
    let node = { val: el, next: null };
    curr.next = node;
    curr = curr.next;
  });
  return headNode.next;
};
