function towerOfHanoi(n, from, to, via) {
  if (n === 0) {
    return;
  }
  towerOfHanoi(n - 1, from, via, to);
  console.log(`Move disk ${n} from ${from} to ${to}`);
  towerOfHanoi(n - 1, via, to, from);
}

towerOfHanoi(4, "A", "C", "B");
