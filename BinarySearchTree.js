class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this
          } else {
            current = current.right;
          }
        }
        else if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this
          } else {
            current = current.left;
          }
        }
      }
    }
  }

  find(value) {
    if (!this.root) {
      return false;
    }
    else if (this.root.value === value) {
      return true
    }
    else {
      var start = this.root;
      while (true) {
        if (value > start.value) {
          if (start.right?.value === value) {
            return true
          } else if (!start.right) {
            return false
          }
          else {
            start = start.right;
          }
        } else if (value < start.value) {
          if (start.left?.value === value) {
            return true
          } else if (!start.left) {
            return false
          }
          else {
            start = start.left;
          }
        }
      }
    }
  }

  BFS() {
    var node = this.root,
      queue = [], data = [];
    queue.push(node)
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) { queue.push(node.left) }
      if (node.right) { queue.push(node.right) }
    }
    return data
  }

  // DFSPreOrder() {
  //   var data = [this.root.value]
  //   var current = this.root

  //   while (true) {
  //     if (current.left) {
  //       data.push(current.left.value)
  //       current = current.left
  //     }
  //     else if (current.right) {
  //       data.push(current.right.value)
  //       current = current.right
  //     }

  //     else {
  //       // current = current
  //       if (current.right && !data.includes(current.right.value)) {
  //         arr.push(current.right.value)
  //         current = current.right
  //       }
  //       else if (current.left && !data.includes(current.left.value)) {
  //         arr.push(current.left.value)
  //         current = current.left
  //       }
  //       else {
  //         current = this.root.right
  //       }
  //     }
  //     return data
  //   }
  // }

  DFSPreOrder() {
    var data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) { traverse(node.left); }
      if (node.right) { traverse(node.right); }
    }
    traverse(this.root)
    return data
  }

  DFSPostOrder() {
    var data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)
    }
    traverse(this.root)
    return data;
  }
  DFSInOrder() {
    var data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data;
  }
}
//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(14);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(16);
// console.log(tree.find(10))
// console.log(tree.find(99))
// console.log(tree.find(1))
// console.log(tree.find(5))

// console.log(tree);
// console.log(tree.BFS());
// console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());