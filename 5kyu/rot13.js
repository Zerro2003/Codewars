function rot13(message) {
  const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
  const map = {};

  for (let i = 0; i < input.length; i++) {
    map[input[i]] = output[i];
  }

  return message
    .split("")
    .map((char) => map[char] || char)
    .join("");
}
