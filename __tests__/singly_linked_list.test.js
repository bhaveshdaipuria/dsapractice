const { List, Node } = require("../singlyLinkedlist");

describe("Test cases for singly linked list", () => {
	let tempList;
	beforeEach(() => {
		tempList = new List();
		for (let i = 1; i <= 6; i++) {
			tempList.push(i);
		}
	});
	test("Testing push method", () => {
		let testHead = new Node(1);
		testHead.next = new Node(2);
		testHead.next.next = new Node(3);
		testHead.next.next.next = new Node(4);
		testHead.next.next.next.next = new Node(5);
		testHead.next.next.next.next.next = new Node(6);
		expect(testHead).toStrictEqual(tempList.getHead());
	});
	test("Testing reverseList method", () => {
		let testHead = new Node(6);
		testHead.next = new Node(5);
		testHead.next.next = new Node(4);
		testHead.next.next.next = new Node(3);
		testHead.next.next.next.next = new Node(2);
		testHead.next.next.next.next.next = new Node(1);
		tempList.reverseList();
		expect(tempList.getHead()).toStrictEqual(testHead);
	});
	test("Testing pop method", () => {
		let testHead = new Node(1);
		testHead.next = new Node(2);
		testHead.next.next = new Node(3);
		testHead.next.next.next = new Node(4);
		testHead.next.next.next.next = new Node(5);
		tempList.pop();
		expect(tempList.getHead()).toStrictEqual(testHead);
	});
	test("Testing shift method", () => {
		let testHead = new Node(2);
		testHead.next = new Node(3);
		testHead.next.next = new Node(4);
		testHead.next.next.next = new Node(5);
		testHead.next.next.next.next = new Node(6);
		tempList.shift();
		expect(tempList.getHead()).toStrictEqual(testHead);
	});
	test("Testing addNode method", () => {
		let testHead = new Node(1);
		testHead.next = new Node(2);
		testHead.next.next = new Node(3);
		testHead.next.next.next = new Node(8);
		testHead.next.next.next.next = new Node(4);
		testHead.next.next.next.next.next = new Node(5);
		testHead.next.next.next.next.next.next = new Node(6);
		tempList.addNode(8, 4);
		expect(tempList.getHead()).toStrictEqual(testHead);
	});
	test("Testing unshift method", () => {
		let testHead = new Node(7);
		testHead.next = new Node(1);
		testHead.next.next = new Node(2);
		testHead.next.next.next = new Node(3);
		testHead.next.next.next.next = new Node(4);
		testHead.next.next.next.next.next = new Node(5);
		testHead.next.next.next.next.next.next = new Node(6);
		tempList.unshift(7);
		expect(tempList.getHead()).toStrictEqual(testHead);
	});
	test("Testing removeNode method", () => {
		let testHead = new Node(1);
		testHead.next = new Node(2);
		testHead.next.next = new Node(3);
		testHead.next.next.next = new Node(5);
		testHead.next.next.next.next = new Node(6);
		tempList.removeNode(4);
		expect(tempList.getHead()).toStrictEqual(testHead);
	});
	test("Testing reversePartly method", () => {
		let testHead = new Node(1);
		testHead.next = new Node(5);
		testHead.next.next = new Node(4);
		testHead.next.next.next = new Node(3);
		testHead.next.next.next.next = new Node(2);
		testHead.next.next.next.next.next = new Node(6);
		tempList.reversePartly(2, 5);
		expect(tempList.getHead()).toStrictEqual(testHead);
	});
});
