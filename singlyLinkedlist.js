//Class for creating a node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//Class for creating a linked list
class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Adding element to the end
  push(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this.head;
  }

  //Reversing list
  reverseList() {
    let current = this.head;

    if (!current || !current.next) {
      return;
    }

    let next = null;
    let prev = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    return;
  }
  //Reversing part of the list
  reversePartly(left, right) {
    if (left < 1 || right > this.length || left > right) {
      throw new Error("You must be a woman right??");
    }

    let current = this.head;
    let prev = null;
    let count = 1;

    while (count < left) {
      prev = current;
      current = current.next;
      count++;
    }

    let reservedPartHead = null;
    let reservedPartTail = current;

    while (count <= right) {
      const next = current.next;
      current.next = reservedPartHead;
      reservedPartHead = current;
      current = next;
      count++;
    }
    if (prev) {
      prev.next = reservedPartHead;
    } else {
      this.head = reservedPartHead;
    }

    reservedPartTail.next = current;

    if (right === this.length) {
      this.tail = reservedPartHead;
    }
  }
  //Removing last node from the list
  pop() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    if (!current.next) {
      this.head = null;
      this.length--;
      return;
    }

    while (current.next.next) {
      current = current.next;
    }

    current.next = null;
    this.tail = current;
    this.length--;
  }

  //Removing first element from the list
  shift() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    if (!current.next) {
      this.head = null;
      this.length--;
      return;
    }

    this.head = this.head.next;
    this.length--;
    return;
  }

  //Insert node between list
  addNode(data, pos) {
    if (pos === 1) {
      this.unshift(data);
      return;
    }

    if (pos > this.length || this.length === 0) {
      throw new Error("oh no");
    }

    const newNode = new Node(data);

    let current = this.head;
    for (let i = 1; i < pos - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;

    this.length++;
  }

  //Removing node from list
  removeNode(data) {
    let current = this.head;

    if (this.head.data === data) {
      this.shift();
      return;
    }

    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  //Adding element to the start
  unshift(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return;
  }

  //Printing list nodes
  printAll() {
    if (this.head === null) {
      return;
    }

    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }
  getLength() {
    return this.length;
  }
}

module.exports = { List, Node };
