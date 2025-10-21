function comp(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) return false;

  const squaredCounts = {};
  array1.forEach((num) => {
    const sq = num ** 2;
    squaredCounts[sq] = (squaredCounts[sq] || 0) + 1;
  });

  for (let val of array2) {
    if (!squaredCounts[val]) return false;
    squaredCounts[val]--;
  }

  return true;
}
