function inArray(array1, array2) {
  return array1
    .filter((str) => array2.some((word) => word.includes(str)))
    .sort();
}
