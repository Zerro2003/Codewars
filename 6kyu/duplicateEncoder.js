function duplicateEncode(word){
  const par = word.toUpperCase().split('').map((a) => a.charCodeAt(0))
  const ch = []
  const Compare = par.reduce((obj, element)=> {
  obj[element] = (obj[element] || 0)+ 1
  return obj
  },{})
  for(let i of par){
      if(Compare[i]>1){
          ch.push(")")
      }else{
          ch.push("(")
      }
  }
  
  return ch.join("")
}