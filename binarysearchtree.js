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

        while (!temp.left) {
          temp = temp.left;
        }

        node.value = temp.value;

        node.right = removeNode(node.right, temp.value);
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

  printAll() {
    console.log(this.root);
  }
}

const newInstance = new Tree();
newInstance.insertNode(10);
newInstance.insertNode(4);
newInstance.insertNode(11);
console.log(newInstance.contains(10));
newInstance.printAll();
