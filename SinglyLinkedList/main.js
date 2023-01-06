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

  insert(val, index) {
    if (index < 0 || this.length - 1 < index) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length - 1) return !!this.push(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || this.length - 1 < index) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let current = this.get(index);
    let prev = this.get(index - 1);
    prev.next = current.next;
    this.length--;
    return current;
  }

  reverse() {
    let current = this.head;
    let next;
    let prev = null;
    // update pointer
    this.head = this.tail;
    this.tail = current;
    // update next direction
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      // update for iteration
      prev = current;
      current = next;
    }

    return this;
  }
}

let list = new SinglyLinkedList();
list.unshift('HI');

list.push('You');
list.unshift('!');
list.insert('ok', 3);

list.remove(3);
list.reverse();

console.log(list);
