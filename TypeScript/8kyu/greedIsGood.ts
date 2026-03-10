export function score(dice: number[]): number {
  let counts: Record<number, number> = {};
  let total = 0;

  for (let d of dice) {
    counts[d] = (counts[d] || 0) + 1;
  }

  for (let i = 1; i <= 6; i++) {
    if (counts[i] >= 3) {
      total += i === 1 ? 1000 : i * 100;
      counts[i] -= 3;
    }
  }

  total += (counts[1] || 0) * 100;
  total += (counts[5] || 0) * 50;

  return total;
}
