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
}

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.unshift(5); // doublyLinkedList
doublyLinkedList.length; // 1
doublyLinkedList.head.val; // 5
doublyLinkedList.tail.val; // 5
doublyLinkedList.unshift(10);
doublyLinkedList;
doublyLinkedList.length; // 2
doublyLinkedList.head.val; // 10
doublyLinkedList.head.next.val; // 5
doublyLinkedList.tail.val; // 5
doublyLinkedList.unshift(15);
doublyLinkedList;
doublyLinkedList.length; // 3
doublyLinkedList.head.val; // 15
doublyLinkedList.tail.val; // 5
doublyLinkedList.head.next.next.val; // 5

doublyLinkedList.shift().val; // 15
doublyLinkedList.length; // 2
doublyLinkedList.shift().val; // 10
doublyLinkedList.length; // 1
doublyLinkedList.shift().val; // 5
doublyLinkedList.length; // 0
doublyLinkedList.pop(); // undefined
doublyLinkedList.length; // 0
