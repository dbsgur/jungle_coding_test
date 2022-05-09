var oddEvenList = function (head) {
  // 정답 코드
  if (!head) return head;
  let ptr1 = head;
  let ptr2 = ptr1.next;
  let newHead = ptr2;
  while (ptr1 && ptr2 && ptr1.next && ptr2.next) {
    ptr1.next = ptr1.next.next;
    ptr2.next = ptr2.next.next;
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }
  ptr1.next = newHead;
  return head;

  // 틀린 나의 코드
  //     let odd = New ListNode();
  //     let even = New ListNode();
  //     let evenHead = even;
  //     let oddHead = odd;
  //     i=1;
  //     while(head){
  //         if(i%2 == 1){
  //             odd.next = odd.next.next;
  //             odd = odd.next
  //         }else{
  //             even.next = head.next.next;
  //             even = even.next;
  //         }
  //         // head = head.next;
  //         i++;
  //     }
  //     odd.next = evenHead.next;

  //     return oddHead.next;
};
