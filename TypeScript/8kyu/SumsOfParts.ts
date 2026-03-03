export function partsSums(ls: number[]): number[] {
  //       let neAr = [[...ls]]
  //     for(let a=ls.length; a>=1; a--){
  //         let last = [...neAr[neAr.length-1]]
  //         last.shift()
  //         neAr.push(last)

  //     }
  //     return neAr.map(a=>a.length===0? 0:a.reduce((a,b)=>a+b))
  const result: number[] = new Array(ls.length + 1);
  let total = ls.reduce((a, b) => a + b, 0);
  result[0] = total;

  for (let i = 0; i < ls.length; i++) {
    total -= ls[i];
    result[i + 1] = total;
  }

  return result;
}
