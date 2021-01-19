// STACKS ARE DATA COLLECTIONS

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val) {
		var newNode = new Node(val);

		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
			this.size++;
		} else {
			var existFirst = this.first;
			var newFirst = newNode;
			this.first = newFirst;
			this.first.next = existFirst;
			this.size++;
		}
		return this;
	}

	pop() {
		if (!this.first) {
			this.first = null;
			this.last = null;
			this.size = 0;
		} else {
			var firstNode = this.first;
			this.first = firstNode.next;
			this.size--;
		}
		return this;
	}
}

var list = new Stack();
