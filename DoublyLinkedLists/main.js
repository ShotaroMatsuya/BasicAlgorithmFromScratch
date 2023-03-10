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
    let targetNode = this.get(index);
    if (targetNode != null) {
      targetNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (this.length <= index || index < 0) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length - 1) return !!this.push(val);
    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    nextNode.prev = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    let targetNode = this.get(index);
    let prevNode = targetNode.prev;
    let nextNode = targetNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    targetNode.next = null;
    targetNode.prev = null;
    this.length--;
    return targetNode;
  }

  reverse() {
    let current = this.head;
    let next;
    let prev = null;
    // update pointer
    this.head = this.tail;
    this.tail = current;
    // update next & prev direction
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      current.prev = next;
      // update for iteration
      prev = current;
      current = next;
    }
    return this;
  }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.reverse(); // singlyLinkedList;
doublyLinkedList.length; // 4
doublyLinkedList.head.val; // 20
doublyLinkedList.head.next.val; // 15
doublyLinkedList.head.next.next.val; // 10
doublyLinkedList.head.next.next.next.val; // 5
