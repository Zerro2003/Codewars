var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
      const newArr = []
  if(typeof iterable === 'string'){
      const makStr = iterable.split('')
      const make = makStr.map((l,i)=>{
    if(makStr[i]!==makStr[i-1]){
        newArr.push(l)
    }
  })
}else{
        const create = iterable.map((l,i)=>{
    if(iterable[i]!==iterable[i-1]){
        newArr.push(l)
    }
    })
} 
return newArr
}