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
			var currentTail = this.tail;
			this.tail = currentTail.prev;
			this.tail.next = null;
			currentTail.prev = null;
		}
		this.length--;
		return currentTail;
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
}

var list = new DoubleLinkedList();
list.push("one");
list.push("two");
list.push("three");
list.push("four");
list.push("five");
