class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.count = 0;
  }
  insertNode(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      const search = (node) => {
        if (value < node.value) {
          if (!node.left) {
            node.left = newNode;
          } else {
            search(node.left);
          }
        } else if (value > node.value) {
          if (!node.right) {
            node.right = newNode;
          } else {
            search(node.right);
          }
        } else {
          throw new Error("This node is already there in the given tree");
        }
      };
      search(this.root);
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return true;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(value) {
    const removeNode = (node, value) => {
      if (!node) {
        return null;
      }

      if (value == node.value) {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          return node.right;
        }

        if (!node.right) {
          return node.left;
        }

        let temp = node.right;
        let parent = node;

        while (temp.left) {
          parent = temp;
          temp = temp.left;
        }

        node.value = temp.value;

        if (parent === node) {
          parent.right = temp.right;
        } else {
          parent.left = temp.right;
        }
        return node;
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else {
        node.right = removeNode(node.right, value);
        return node;
      }
    };
    this.root = removeNode(this.root, value);
  }

  inorderTrav() {
    const result = [];
    const travserse = (node) => {
      if (!node) {
        return;
      }
      travserse(node.left);
      result.push(node.value);
      travserse(node.right);
    };
    travserse(this.root);
    console.log(result);
  }

  preOrder() {
    const result = [];
    const traverse = (node) => {
      if (!node) {
        return;
      }
      result.push(node.value);
      traverse(node.left);
      traverse(node.right);
    };
    traverse(this.root);
    console.log(result);
  }

  postOrder() {
    const result = [];
    const traverse = (node) => {
      if (!node) {
        return;
      }
      traverse(node.left);
      traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    console.log(result);
  }

  bfs() {
    const queue = [];
    const result = [];
    if (this.root) {
      queue.push(this.root);
    }
    while (queue.length > 0) {
      const elem = queue.shift();
      result.push(elem.value);
      if (elem.left) {
        queue.push(elem.left);
      }
      if (elem.right) {
        queue.push(elem.right);
      }
    }
    return result;
  }

  printAll() {
    console.log(this.root);
  }
}

const newInstance = new Tree();
newInstance.insertNode(10);
newInstance.insertNode(9);
newInstance.insertNode(8);
newInstance.insertNode(40);
newInstance.insertNode(35);
newInstance.insertNode(75);
newInstance.insertNode(100);
newInstance.insertNode(11);
// console.log(newInstance.bfs());
// newInstance.remove(37);
// newInstance.printAll();
