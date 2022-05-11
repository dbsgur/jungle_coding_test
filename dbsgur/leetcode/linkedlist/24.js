// https://leetcode.com/problems/swap-nodes-in-pairs/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let curr = head;

  while (curr && curr.next) {
    [curr.val, curr.next.val] = [curr.next.val, curr.val];
    curr = curr.next.next;
  }
  return head;
};

// wonyeong's code

var swapPairs = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  let arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  let temp = [];
  for (let i = 0; i < arr.length; i += 2) {
    if (i + 1 < arr.length) {
      temp.push(arr[i + 1]);
      temp.push(arr[i]);
    }
  }
  if (temp.length != arr.length) {
    temp.push(arr[arr.length - 1]);
  }

  let headnode = { val: "0", next: null };
  curr = headnode;

  temp.map((el) => {
    let node = { val: el, next: null };
    curr.next = node;
    curr = curr.next;
  });

  return headnode.next;
};
