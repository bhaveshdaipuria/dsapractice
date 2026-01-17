class MinHeap {
	constructor() {
		this.heap = [];
	}
	addNode(value) {
		this.heap.push(value);
		let i = this.heap.length - 1;
		while (i > 0) {
			let parentIndex = Math.floor((i - 1) / 2);
			if (this.heap[parentIndex] > this.heap[i]) {
				let temp = this.heap[parentIndex];
				this.heap[parentIndex] = this.heap[i];
				this.heap[i] = temp;
				i = parentIndex;
			} else {
				break;
			}
		}
	}

	heapSort() {
		let size = this.heap.length;
		while (size > 1) {
			let temp = this.heap[size - 1];
			this.heap[size - 1] = this.heap[0];
			this.heap[0] = temp;
			size--;
			this.heapifyDown(0, size);
		}
	}

	heapifyArray(arr) {
		this.heap = arr;
		let n = Math.floor((this.heap.length - 1) / 2);
		while (n >= 0) {
			this.heapifyDown(n, this.heap.length);
			n--;
		}
		return this.heap;
	}

	extractMin() {
		if (this.heap.length === 0) {
			return null;
		}
		if (this.heap.length === 1) {
			return this.heap.pop();
		}
		const min = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.heapifyDown(0, this.heap.length);
		return min;
	}

	heapifyDown(index, size) {
		let n = size;
		let i = index;
		while (true) {
			let smallest = i;
			let left = 2 * i + 1;
			let right = 2 * i + 2;

			if (left < n && this.heap[left] < this.heap[smallest]) {
				smallest = left;
			}
			if (right < n && this.heap[right] < this.heap[smallest]) {
				smallest = right;
			}
			if (smallest !== i) {
				let temp = this.heap[smallest];
				this.heap[smallest] = this.heap[i];
				this.heap[i] = temp;
				i = smallest;
			} else {
				break;
			}
		}
	}
}

module.exports = MinHeap;
