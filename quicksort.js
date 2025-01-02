function partition(arr, lo, hi) {
	const pivot = arr[hi];
	let idx = lo - 1;

	for (let i = lo; i < hi; i++) {
		if (arr[i] <= pivot) {
			idx++;
			const temp = arr[i];
			arr[i] = arr[idx];
			arr[idx] = temp;
		}
	}

	idx++;
	arr[hi] = arr[idx];
	arr[idx] = pivot;

	return idx;
}

function quickSort(arr, lo, hi) {
	if (lo >= hi) {
		return;
	}

	const index = partition(arr, lo, hi);
	quickSort(arr, lo, index - 1);
	quickSort(arr, index + 1, hi);
	return arr;
}

module.exports = { quickSort };

// const array = [3, 4, 1, 6, 7];
// const startIndex = 0;
// const initialPivot = array.length - 1;
//
// quickSort(array, startIndex, initialPivot);
//
// console.log(array);
