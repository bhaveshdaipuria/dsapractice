const { mergeSort } = require("../mergesort");
const { quickSort } = require("../quicksort");

describe("Testing mergesort and quicksort", () => {
	const testCases = [
		[
			[3, 1, 4, 1, 5, 9],
			[1, 1, 3, 4, 5, 9],
		],
		[
			[10, -1, 2, 5, 0, 6],
			[-1, 0, 2, 5, 6, 10],
		],
		[
			[8, 4, 2, 1, 3, 7],
			[1, 2, 3, 4, 7, 8],
		],
	];

	test.each(testCases)("sorting %p to %p using merge sort", (input, output) => {
		expect(mergeSort(input)).toStrictEqual(output);
	});
	test.each(testCases)("sorting %p to %p using quicksort", (input, output) => {
		expect(quickSort(input, 0, input.length - 1)).toStrictEqual(output);
	});
});
