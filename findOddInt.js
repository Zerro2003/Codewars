function findOdd(A) {
  //happy coding!
    const comap = A.reduce((a,b)=>{
      a[b]= (a[b] || 0 )+1
      return a
      
  },{})
  let g = []
  for(i in comap){
      if(comap[i]%2!==0){
          g.push(i)
      }
  }
  return parseInt(g.join())
}