function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

  let count = 1;
  let height = h * bounce;

  while (height > window) {
    count += 2;
    height *= bounce;
  }

  return count;
}
