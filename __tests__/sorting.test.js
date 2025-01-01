const { selectionSort, bubbleSort, insertionSort } = require("../sorting");

describe("Sorting Algorithms", () => {
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

	test.each(testCases)(
		"sorting %p to %p using selection sort",
		(input, output) => {
			expect(selectionSort(input)).toStrictEqual(output);
		},
	);
	test.each(testCases)(
		"sorting %p to %p using bubble sort",
		(input, output) => {
			expect(bubbleSort(input)).toStrictEqual(output);
		},
	);
	test.each(testCases)(
		"sorting %p to %p using insertion sort",
		(input, output) => {
			expect(insertionSort(input)).toStrictEqual(output);
		},
	);
});
