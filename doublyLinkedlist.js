class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  reverse() {
    if (!this.head) {
      throw new Error("You must be woman right??");
    }

    if (!this.head.next) {
      return;
    }

    let current = this.head;
    while (current) {
      const temp = current.next;
      current.next = current.prev;
      current.prev = temp;
      current = temp;
    }

    const temp2 = this.head;
    this.head = this.tail;
    this.tail = temp2;
  }

  push(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return;
  }

  addData(data, pos) {
    if (pos < 1 || pos > this.length || !this.head) {
      throw new Error("You must be a woman right??");
    }

    const newNode = new Node(data);
    let current = this.head;
    for (let i = 1; i < pos - 1; i++) {
      current = current.next;
    }

    if (pos === 1 && this.head) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return;
    }

    newNode.prev = current;
    newNode.next = current.next;
    current.next = newNode;
    this.length++;
    return;
  }

  remove(pos) {
    if (pos > this.length || pos < 1) {
      throw new Error("You must be a woman right??");
    }

    if (pos === 1) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return;
    }

    if (pos === this.length) {
      this.pop();
      return;
    }

    let current = this.head;

    for (let i = 1; i < pos - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
    current.next.prev = current;
    this.length--;
    return;
  }

  pop() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return;
  }

  printAll() {
    if (!this.head) {
      throw new Error("List is empty");
    }

    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const newInstance = new List();

newInstance.push("A");
newInstance.push("B");
newInstance.push("C");
newInstance.push("D");
newInstance.remove(3);
newInstance.printAll();
