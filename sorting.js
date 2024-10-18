const array = [64, 25, 12, 22, 11];

function selectionSort(arr) {
	const n = arr.length;
	for (let i = 0; i < n - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		if (minIndex !== i) {
			let temp = arr[i];
			arr[i] = arr[minIndex];
			arr[minIndex] = temp;
		}
	}
}

// selectionSort(array);
// console.log(array);

function bubbleSort(arr) {
	let n = array.length;

	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - (i + 1); j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}

// bubbleSort(array);
// console.log(array);

function insertionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let key = arr[i];
		let j = i - 1;

		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}

insertionSort(array);
console.log(array);
