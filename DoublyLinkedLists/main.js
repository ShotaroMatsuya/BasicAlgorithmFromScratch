class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    let prev = this.tail;
    newNode.prev = prev;
    this.tail = newNode;
    this.tail.prev.next = this.tail;
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let lastNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = lastNode.prev;
      this.tail.next = null;
    }
    this.length--;
    return lastNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    let shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
    }
    this.length--;
    return shiftedNode;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let prevHead = this.head;
      prevHead.prev = newNode;
      this.head = newNode;
      this.head.next = prevHead;
      if (this.length === 1) this.tail = prevHead;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (this.length <= index || index < 0) return null;
    let overHalf = Math.floor(this.length / 2) < index + 1;
    let current;
    if (overHalf) {
      current = this.tail;
      for (let i = 0; i < this.length - index - 1; i++) {
        current = current.prev;
      }
    } else {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    }
    return current;
  }

  set(index, val) {
    if (this.length <= index || index < 0) return false;
    let targetNode = this.get(index);
    targetNode.val = val;
    return true;
  }
}

var doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.get(0).val; // 5
doublyLinkedList.get(1).val; // 10
doublyLinkedList.get(2).val; // 15
doublyLinkedList.get(3).val; // 20
doublyLinkedList.get(4); // null

var doublyLinkedList1 = new DoublyLinkedList();

doublyLinkedList1.push(5).push(10).push(15).push(20);
doublyLinkedList1.set(0, 10); // true
doublyLinkedList1.length; // 4
doublyLinkedList1.head.val; // 10

doublyLinkedList1.set(10, 10); // false

doublyLinkedList1.set(2, 100); // true
doublyLinkedList1.head.next.next.val; // 100
