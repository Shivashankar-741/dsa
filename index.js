// console.log("ll");

/**LINKED LIST */
// linked list is  just a collection of nodes
// node just stores a piece of data and then it
//stores a reference to next node

// class Node {
// 	constructor(val) {
// 		this.val = val;
// 		this.next = null;
// 	}
// }

// var first = new Node("Hi");
// first.next = new Node("i");
// first.next.next = new Node("am");
// first.next.next.next = new Node("here");

// console.log(first);
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// PUSH METHOD
	// "HI"
	// HT
	// "HI"->"HELLO"
	// H       T
	// "HI"->"HELLO"->"HEY"
	//  H               T
	// IF THE LIST IS EMPTY SET BOTH THE HEAD AND TAIL IN SAME FIRST POSITION
	// ELSE IF THE LIST CONTAINS SOME LIST, AFTER THE TAIL CREATE THE NEW LIST AND UPDATE IT AS NEWLTAIL
	push(val) {
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			// this.tail = newNode.next;
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		console.log(this);
		return this;
	}
	// pop() {
	// 	if (!this.head) {
	// 		return undefined;
	// 	} else {
	// 		var current = this.head;
	// 		// var newTail = current;
	// 		while (current.next) {
	// 			// newTail = newTail.next;
	// 			current = current.next;
	// 		}
	// 		var newTail = current;
	// 		this.tail = newTail;
	// 		this.tail.next = null;
	// 		this.length--;
	// 		return current;
	// 	}
	// }
}

var list = new SinglyLinkedList();

list.push("Hi");
list.push("there");
list.push("you");
