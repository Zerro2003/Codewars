function count(string) {
  const result = {};
  for (let char of string) {
    result[char] = (result[char] || 0) + 1;
  }
  return result;
}
