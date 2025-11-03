String.prototype.camelCase = function () {
  return this.split(" ")
    .map((a) =>
      a
        .split("")
        .map((a, b) => (b === 0 ? (a = a.toUpperCase()) : (a = a)))
        .join("")
    )
    .join("");
};
