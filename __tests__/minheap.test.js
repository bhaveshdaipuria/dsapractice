const MinHeap = require("../minheap");

describe("Test cases for min heap", () => {
	let minheapInstance;
	let testArray;

	beforeEach(() => {
		minheapInstance = new MinHeap();
		testArray = [10, 1, 2, 4, 5, 33, 6, 7];
	});

	test("heapifying array (min heap)", () => {
		expect(minheapInstance.heapifyArray(testArray)).toStrictEqual([
			1, 4, 2, 7, 5, 33, 6, 10,
		]);
	});

	test("adding value in the node (min heap)", () => {
		minheapInstance.heapifyArray(testArray);
		minheapInstance.addNode(97);
		minheapInstance.addNode(67);
		minheapInstance.addNode(54);
		expect(minheapInstance.heap).toStrictEqual([
			1, 4, 2, 7, 5, 33, 6, 10, 97, 67, 54,
		]);
	});

	test("heap sort (min heap)", () => {
		minheapInstance.heapifyArray(testArray);
		minheapInstance.heapSort();
		expect(minheapInstance.heap).toStrictEqual([33, 10, 7, 6, 5, 4, 2, 1]);
	});
});
