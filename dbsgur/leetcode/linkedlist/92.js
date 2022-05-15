/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head || left === right) {
    return head;
  }
  let root = new ListNode(0, null);
  let start = root;
  root.next = head;
  let i, tmp;
  for (i = 0; i < left - 1; i++) {
    start = start.next;
  }
  let end = start.next;

  for (i = 0; i < right - left; i++) {
    // [tmp, start.next, end.next] = [start.next, end.next, end.next.next];
    tmp = start.next;
    start.next = end.next;
    end.next = end.next.next;
    start.next.next = tmp;
  }
  return root.next;
};
