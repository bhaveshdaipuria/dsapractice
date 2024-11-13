const n = 7;
const k = 3;
const pages = [7, 0, 1, 2, 0, 3, 0];

const memory = new Set();
const queue = [];
let pageFaults = 0;

for (let i = 0; i < n; i++) {
  const page = pages[i];
  if (!memory.has(page)) {
    pageFaults++;
    if (memory.size === k) {
      const lru = queue.shift();
      memory.delete(lru);
    }
    memory.add(page);
  } else {
    const idx = queue.indexOf(page);
    if (idx !== -1) {
      queue.splice(idx, 1);
    }
  }
  queue.push(page);
}

console.log(pageFaults);
