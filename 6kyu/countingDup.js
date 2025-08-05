function duplicateCount(text){
  const par = text.toUpperCase().split('').map((a) => a.charCodeAt(0))
  const obj = {}
  const ch = []
  const Compare = par.reduce((obj, element)=> {
  obj[element] = (obj[element] || 0)+ 1
  return obj
  },{})
  for(let i in Compare){
      if(Compare[i]>1){
          ch.push(i)
      }
  }
  return ch.length
}