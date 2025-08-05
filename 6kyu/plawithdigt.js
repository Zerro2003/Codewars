function digPow(n, p){
  // ...
  let g = n.toString().split('').map(Number).map((a,b)=>a**(b+p))
  let gu = g.reduce((a,b)=>a+b)
  return gu%n===0 ?  gu/n:-1
}