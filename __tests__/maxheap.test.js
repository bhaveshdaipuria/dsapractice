const MaxHeap = require("../maxheap");

describe("Test cases for max heap", () => {
	let maxheapInstance;
	let testArray;

	beforeEach(() => {
		maxheapInstance = new MaxHeap();
		testArray = [10, 1, 2, 4, 5, 33, 6, 7];
	});

	test("heapifying array (max heap)", () => {
		expect(maxheapInstance.heapifyArray(testArray)).toStrictEqual([
			33, 7, 10, 4, 5, 2, 6, 1,
		]);
	});

	test("adding value in the node (max heap)", () => {
		maxheapInstance.heapifyArray(testArray);
		maxheapInstance.addNode(97);
		maxheapInstance.addNode(67);
		maxheapInstance.addNode(54);
		expect(maxheapInstance.heap).toStrictEqual([
			97, 67, 10, 7, 54, 2, 6, 1, 4, 5, 33,
		]);
	});

	test("heap sort (max heap)", () => {
		maxheapInstance.heapifyArray(testArray);
		maxheapInstance.heapSort();
		expect(maxheapInstance.heap).toStrictEqual([1, 2, 4, 5, 6, 7, 10, 33]);
	});
});
