function sumDigPow(a, b) {
      let go = []
  for(let i=a; i<=b;i++){
      let g = i.toString().split('').map(Number)
      let gg = g.map((a,b)=> a**(b+1)).reduce((a,b)=>a+b)
      if(i===gg){
          go.push(i)
      }
}
      return go
}