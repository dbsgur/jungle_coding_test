// N이 1000이하라면 shift를 사용해도 무방

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // 제일 앞 노드
    this.rear = null; // 제일 뒤 노드
    this.length = 0; // 노드의 길이
  }

  enque(data) {
    const node = new Node(data);
    if (!this.head) {
      // 헤드가 없을 경우 head를 해당 노드로
      this.head = node;
    } else {
      this.rear.next = node; // 아닐 경우 마지막의 다음 노드
    }
    this.rear = node; // 마지막을 해당 노드로 한다.
    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return false;
    }
    const data = this.head.data; //head를 head의 다음 것으로 바꿔주고 뺀 data를 return
    this.head = this.head.next;
    this.length--;

    return data;
  }

  // function return head
  front() {
    // if have head node -> return data
    return this.head && this.head.data;
  }

  // function return all elements in queue
  getQueue() {
    if (!this.head) return false;
    let node = this.head;
    const array = [];
    while (node) {
      // node가 없을 때까지 array에 추가한후 반환
      array.push(node.data);
      node = node.next;
    }
    return array;
  }
}

const queue = new Queue();
queue.enque(1);
queue.enque(2);
queue.enque(3);
queue.enque(4);
queue.dequeue();

console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.getQueue());
