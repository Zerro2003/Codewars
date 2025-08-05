function high(x) {
  let words = x.split(' ');
  let scores = words.map(word =>
    word.split('').reduce((sum, char) => sum + (char.charCodeAt(0) - 96), 0)
  );
  let maxIndex = scores.indexOf(Math.max(...scores));
  return words[maxIndex];
}