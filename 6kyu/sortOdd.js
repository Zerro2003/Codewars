function sortArray(array) {
  let p = [];
  for (a of array) {
    if (a % 2 !== 0) {
      p.push(a);
    }
  }
  p.sort((a, b) => a - b);
  let index = 0;
  let final = [];
  for (d of array) {
    if (p.includes(d)) {
      index++;
      d = p[index - 1];
      final.push(d);
    } else {
      final.push(d);
    }
  }
  return final;
}
