class MaxHeap {
	constructor() {
		this.heap = [];
	}

	addNode(value) {
		this.heap.push(value);
		this.heapifyUp(this.heap.length - 1);
	}

	heapifyUp(index) {
		let i = index;
		while (i > 0) {
			let parentIndex = Math.floor((i - 1) / 2);
			if (this.heap[i] > this.heap[parentIndex]) {
				let temp = this.heap[i];
				this.heap[i] = this.heap[parentIndex];
				this.heap[parentIndex] = temp;
				i = parentIndex;
			} else {
				break;
			}
		}
	}
	heapifyDown(index, size) {
		let n = size;
		let i = index;
		while (true) {
			let largest = i;
			let left = 2 * i + 1;
			let right = 2 * i + 2;
			if (left < n && this.heap[left] > this.heap[largest]) {
				largest = left;
			}
			if (right < n && this.heap[right] > this.heap[largest]) {
				largest = right;
			}
			if (largest !== i) {
				let temp = this.heap[i];
				this.heap[i] = this.heap[largest];
				this.heap[largest] = temp;
				i = largest;
			} else {
				break;
			}
		}
	}
	extractMax() {
		if (this.heap.length === 0) {
			return null;
		}
		if (this.heap.length === 1) {
			return this.heap.pop();
		}
		const max = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.heapifyDown(0, this.heap.length);
		return max;
	}
	heapSort() {
		let size = this.heap.length;
		while (size > 1) {
			let temp = this.heap[0];
			this.heap[0] = this.heap[size - 1];
			this.heap[size - 1] = temp;
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
}

module.exports = MaxHeap;
