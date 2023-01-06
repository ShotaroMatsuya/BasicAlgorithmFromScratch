// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.length) return undefined;
    const current = this.head;
    const newHead = current.next;
    this.head = newHead;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    let current = this.head;
    this.head = newNode;
    this.head.next = current;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || this.length - 1 < index) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  set(val, index) {
    let current = this.get(index);
    if (!current) return false;
    current.val = val;
    return true;
  }
}

let list = new SinglyLinkedList();
list.unshift('HI');

list.push('You');
list.unshift('!');
list.set('!!!', 0);
list.set('hi', 1);
list.set('not found', 3);

console.log(list);
