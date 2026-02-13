export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  let trues = arrayOfSheep.filter(a=>a===true)
  return trues.length
}