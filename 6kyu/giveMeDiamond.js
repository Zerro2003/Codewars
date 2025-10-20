function diamond(n) {
  if (n % 2 === 0 || n < 1) return null;

  let str = "";
  for (let i = 0; i < n; i++) {
    const stars = i <= Math.floor(n / 2) ? 2 * i + 1 : 2 * (n - i - 1) + 1;
    const spaces = (n - stars) / 2;
    str += " ".repeat(spaces) + "*".repeat(stars) + "\n";
  }
  return str;
}
