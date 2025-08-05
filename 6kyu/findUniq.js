function findUniq(arr) {
  let g = arr.sort()
  return g[0]===g[1]?g[g.length-1]:g[0]
}