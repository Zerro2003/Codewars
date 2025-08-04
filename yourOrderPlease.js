function order(words){
  // ...
  const sp = words.split(" ")
const bw = []
for(o of sp){
    let number = o.split('')
    let prc = number.filter(a=> a==="1"|| a==="2" ||a==="3"|| a==="4"||a==="5"|| a==="6"||a==="7"|| a==="8"||a==="9").join()
    bw.push(prc)
}
let change = bw.sort()
let chang = change.map(a=>{
    let f = sp.find(fi=> fi.includes(a))
    a = f
    return a
})
return chang.join(" ")
}