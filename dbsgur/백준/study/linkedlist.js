class Node {
  constructor(data, next = null) {
    // data와 next를 넣고 next의 디폴트는 Null로 지정 왜냐하면
    //linkedlist의 tail은 널로 끝나기 때문
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // 처음에 데이터가 없다면 head는 null이다.
    this.size = 0; // 리스트의 크기를 찾기 위해 사용 디폴트는 0으로 지정
  }
  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head); // head에 새로운 node가 들어가고 기존의 헤드는 next로 밀려난다.
    this.size++;
  }

  // Insert Last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        // this.head에 next가 있다면, 즉, next가 null이 아니라면
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // Insert at index - Insert Middle
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      this.size++;
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }
  clearList() {
    this.head = null;
    this.size = 0;
  }
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const LinkedList = new LinkedList();

LinkedList.insertFirst(100);
LinkedList.insertFirst(200);
LinkedList.insertFirst(300);
LinkedList.insertLast(400);
LinkedList.insertAt(500, 1);

LinkedList.removeAt(2);

LinkedList.printListData();

LinkedList.getAt(2);

console.log(LinkedList);
