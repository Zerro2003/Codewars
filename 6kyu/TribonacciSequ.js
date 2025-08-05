function tribonacci(signature,n){
  let arr = [...signature]
    if(n===0) return []
      if(n ===1) return signature.slice(0,n)
  for(let i=0; i < n-3; i++){
      let lastThree = [arr[arr.length-1],arr[arr.length-2],arr[arr.length-3]]
      let sum = lastThree.reduce((a,b)=> a+b )
      arr.push(sum)
  }
  return arr
}