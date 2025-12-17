function firstNonRepeatingLetter(s) {
  const chars = [...s];

  const counts = {};
  for (let ch of chars) {
    const low = ch.toLowerCase();
    counts[low] = (counts[low] || 0) + 1;
  }

  for (let ch of chars) {
    if (counts[ch.toLowerCase()] === 1) return ch;
  }

  return "";
}