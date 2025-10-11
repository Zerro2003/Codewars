function getConsectiveItems(items, key) {
  const separate = items.toString().split("");
  let maxStreak = 0;
  let currentStreak = 0;

  for (let i = 0; i < separate.length; i++) {
    if (separate[i] === key.toString()) {
      currentStreak++;
      if (currentStreak > maxStreak) {
        maxStreak = currentStreak;
      }
    } else {
      currentStreak = 0;
    }
  }

  return maxStreak;
}
