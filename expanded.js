function expandedForm(num) {
  let g = num.toString().split('').map(Number)
  let gg = []
  g.forEach((a,b)=>{
      if(a>0){
      let sli = g.slice(b + 1).length
      let neA = Array(sli).fill(0)
      neA.unshift(a)
      gg.push(neA.join(''))
  }
  })
  return gg.join(" + ")
}