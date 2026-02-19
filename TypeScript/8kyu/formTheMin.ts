export const minValue = (values: number[]): number => {
  let mySet = new Set (values)
  return +(Array.from(mySet).sort().join(''))
};