function luckCheck(ticket) {
  if (typeof ticket !== "string" || ticket.length === 0) {
    throw new Error();
  }

  const digits = [];
  for (let i = 0; i < ticket.length; i++) {
    const char = ticket[i];
    if (char < "0" || char > "9" || char === " ") {
      throw new Error();
    }
    digits.push(Number(char));
  }

  const half = Math.floor(digits.length / 2);
  const left = digits.slice(0, half);
  const right = digits.slice(-half);

  const sum = (arr) => arr.reduce((a, b) => a + b, 0);

  return sum(left) === sum(right);
}
