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
		// console.log(this);
		return this;
	}

	// IF THE LIST EMPTY IT MEANS THERE IS NO NODE IN THE LIST THEN RETURNS UNDEFINED
	// ELSE LOOP THROUGH THE LIST UNTILL THE LAST ELEMENT OF THE NODES{
	// INITALLY THE CURRENT AND NEWTAIL IN THE HEAD
	//  WE HAVE TWO VAIRABLE CURRENT AND NEWNODE
	// LOOP THROUGH THE LIST WHEN THE NEXT VALUE GET NULL
	// }
	pop() {
		if (!this.head) return undefined;
		else {
			var current = this.head; //updating will change here
			var newTail = current; // set will change here
			while (current.next) {
				console.log(current);
				newTail = current; //set newtail = current
				current = current.next; // updating current = next one
			}
			this.tail = newTail;
			this.tail.next = null;
			this.length--;
			if (this.length === 0) {
				this.head = null;
				this.tail = null;
			}
			return current;
		}
	}

	// IF THE LIST EMPTY IT MEANS THERE IS NO NODE IN THE LIST THEN RETURNS UNDEFINED
	// ELSE SET THE HEAD AS SECOND NODE, WILL DISCONNECT THE FIRST NODE AUTOMATICALLY WIL BE LTHE FIRST REMOVED

	shift() {
		if (!this.head) return undefined;
		else {
			var current = this.head;
			this.head = current.next;
			this.length--;
		}
		if (this.length === 0) {
			this.tail = null;
		}
		return current;
	}

	// IF THE LIST EMPTY IT MEANS THERE IS NO NODE, SET THE HEAD AND TAIL IN THE SAME LIST
	// ELSE CREATE THE NEWNODE AND SET THE HEAD AS NEXT OF NEWNODE AND SET HEAD AS NEWNODE

	unshift(val) {
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(index) {
		// IF THE THE LENGHT OF LIST IS GREATER THAN OR EQULA TO INDEX OR INDEX LESS THAN ZERO RETURN NULL
		// ELSE SET COUNTER AS ZERO INITIALLY LOOP THROUGH THE HEAD UNTILL COUNTER NOT EQAUL TO INDEX
		if (index < 0 || index >= this.length) {
			return null;
		} else {
			// var current = this.head;
			// var increment = 0;
			// while (current.next) {
			// 	if (increment === index) {
			// 		return current;
			// 	} else {
			// 		current = current.next;
			// 		increment++;
			// 	}
			// }

			var counter = 0;
			var current = this.head;
			while (counter !== index) {
				current = current.next;
				counter++;
			}
			return current;
		}
	}
	set(index, val) {
		// IF THE THE LENGHT OF LIST IS GREATER THAN OR EQUAL TO INDEX OR INDEX LESS THAN ZERO RETURN NULL
		// ELSE SET COUNTER AS ZERO INITIALLY LOOP THROUGH THE HEAD UNTILL COUNTER NOT EQAUL TO INDEX, WHEN THE INDEX FOUND CHANGE THE VALUE
		// if (index < 0 || index >= this.length) {
		// 	return null;
		// } else {
		// 	var counter = 0;
		// 	var current = this.head;
		// 	while (counter !== index) {
		// 		current = current.next;
		// 		counter++;
		// 	}
		// 	var change = current;
		// 	change.val = val;
		// 	return change; // return true
		// }
		var foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}
}

var list = new SinglyLinkedList();

// list.push("Hi");
// list.push("there");
// list.push("you");
