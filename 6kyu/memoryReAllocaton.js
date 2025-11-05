function memAlloc(banks) {
  const seen = new Set();
  let cycles = 0;

  while (true) {
    const key = banks.join(",");
    if (seen.has(key)) return cycles;

    seen.add(key);
    cycles++;

    let max = Math.max(...banks);
    let index = banks.indexOf(max);

    banks[index] = 0;
    while (max > 0) {
      index = (index + 1) % banks.length;
      banks[index]++;
      max--;
    }
  }
}
