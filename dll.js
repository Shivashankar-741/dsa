// MOST IMPORTANT THIS.HEAD INDICATE THE CURRENT LIST ONE THE HEAD
// WHEN YOU SET THE SOME VARIABLE TO THIS.HEAD IT INDICATE AT POINT WHAT THE HEAD WAS.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length == 0) {
      return undefined;
    }

    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      // var currentTail = this.tail;
      // this.tail = currentTail.prev;
      // this.tail.next = null;
      // currentTail.prev = null;

      var currentTail = this.tail;
      var newTail = currentTail.prev;
      this.tail = newTail;
      this.tail.next = null;
    }
    this.length--;
    // return currentTail;
    return this;
  }

  // THIS.HEAD INDICATES THE CURRENT HEAD
  shift() {
    if (this.length == 0) {
      return undefined;
    }
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      var oldHead = this.head;
      this.head = oldHead.next;
      // oldHead.prev = null;
      this.head.prev = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      var currentHead = this.head;
      currentHead.prev = newNode;
      this.head = newNode;
      this.head.next = currentHead;
      this.head.prev = null;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    // else {
    // 	var counter = 0;
    // 	var head = this.head;
    // 	while (counter !== index) {
    // 		head = head.next;
    // 		counter++;
    // 	}
    // 	return head;
    // }

    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    var changeValue = this.get(index);
    if (changeValue) {
      changeValue.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      this.unshift(val);
      this.length++;
    }
    if (index === this.length) {
      this.push(val);
      this.length++;
    } else {
      var newNode = new Node(val);
      var prevNode = this.get(index - 1);
      var nextNode = this.get(index);

      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = nextNode;
      nextNode.prev = newNode;

      this.length++;
      return true;
    }

    // if (index < 0 || index > this.length) return false;
    // if (index === 0) return !!this.unshift(val);
    // if (index === this.length) return !!this.push(val);

    // var newNode = new Node(val);
    // var beforeNode = this.get(index - 1);
    // var afterNode = beforeNode.next;

    // beforeNode.next = newNode;
    // newNode.prev = beforeNode;
    // newNode.next = afterNode;
    // afterNode.prev = newNode;
    // this.length++;
    // return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      this.shift();
      this.length--;
    }
    if (index === this.length - 1) {
      this.pop();
      this.length--;
    } else {
      var prevNode = this.get(index - 1);
      var nextNode = this.get(index + 1);

      prevNode.next = nextNode;
      nextNode.prev = prevNode;

      this.length--;
      return true;
    }
  }
}

var list = new DoubleLinkedList();
list.push("one");
list.push("two");
list.push("three");
list.push("four");
list.push("five");
