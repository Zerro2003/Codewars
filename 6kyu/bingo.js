function mirror(text) {
  const reversed = text
    .split(" ")
    .map((word) => word.split("").reverse().join(""));

  const maxLength = Math.max(...reversed.map((word) => word.length));
  const border = "*".repeat(maxLength + 4);

  const framed = reversed.map((word) => `* ${word.padEnd(maxLength)} *`);

  return [border, ...framed, border].join("\n");
}
