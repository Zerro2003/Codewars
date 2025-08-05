function countSmileys(arr) {
  const d = [];
  for (let j of arr) {
    if (
      j === ":)" || j === ":-)" || j === ":~)" ||
      j === ":D" || j === ":-D" || j === ":~D" ||
      j === ";)" || j === ";-)" || j === ";~)" ||
      j === ";D" || j === ";-D" || j === ";~D"
    ) {
      d.push(j);
    }
  }
  return d.length;
}