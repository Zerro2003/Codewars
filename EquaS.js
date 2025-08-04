function findEvenIndex(arr) {
      const ne = []
  for(let i = 0; i<=arr.length; i++){
      let h = arr.slice(i).reduce((k,j)=>k+j,0)
      let ho = arr.slice(0,i+1).reduce((k,j)=>k+j,0)
      
      if(h===ho){
          ne.push(i)
      }
}
if(ne.length===0){
    return -1
}
return ne[0]
}