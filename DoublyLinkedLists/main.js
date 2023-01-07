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
    let targetNode = this.get(index);
    if (targetNode !== null) {
      let prevNode = targetNode.prev;
      let nextNode = targetNode.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }
    this.length--;
    return targetNode;
  }
}

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.insert(2, 12); // true
doublyLinkedList.insert(100, 12); // false
doublyLinkedList.length; // 5
doublyLinkedList.head.val; // 5
doublyLinkedList.head.next.val; // 10
doublyLinkedList.head.next.next.val; // 12
doublyLinkedList.head.next.next.next.val; // 15
doublyLinkedList.head.next.next.next.next.val; // 20

var doublyLinkedList1 = new DoublyLinkedList();
doublyLinkedList1.push(5).push(10).push(15).push(20);
doublyLinkedList1.remove(2).val; // 15
doublyLinkedList1.remove(100); // undefined
doublyLinkedList1.length; // 3
doublyLinkedList1.head.val; // 5
doublyLinkedList1.head.next.val; // 10
doublyLinkedList1.head.next.next.val; // 20
