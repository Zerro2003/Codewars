function persistence(num) {
   //code me
  const arr = []
  for(let l = num; num>9;l--){
      let tr = num.toString().split('').map(Number)
      let res = tr.reduce((a,b)=>a*b)
      num=res
      arr.push(num)
  }
  return arr.length
}