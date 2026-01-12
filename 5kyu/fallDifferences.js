class GroupByDifference {
  constructor(arr) {
    this.arr = Array.isArray(arr) ? arr.slice() : [];
  }

  find(d) {
    if (this.arr.length === 0) return [];

    const sorted = [...this.arr].sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < sorted.length; i++) {
      const current = sorted[i];
      const prev = sorted[i - 1];
      const next = sorted[i + 1];

      if (
        (prev !== undefined && Math.abs(current - prev) <= d) ||
        (next !== undefined && Math.abs(next - current) <= d)
      ) {
        result.push(current);
      }
    }

    return result;
  }
}
