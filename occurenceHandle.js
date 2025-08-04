function deleteNth(arr,n){
  // ...
  const testing = []
const hit = []
  for(d of arr){
     testing.push(d)
     const compare = testing.reduce((obj, element)=> {
      obj[element] = (obj[element] || 0)+ 1
      return obj
  },{})
  if(compare[d]<=n){
      hit.push(d)
  }
  }
  return hit
}