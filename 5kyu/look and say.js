function lookSay(number){
  if(number>=0){
        const str = String(number);
  const result = [];
  let group = str[0];

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      group += str[i];
    } else {
      result.push(Number(group));
      group = str[i];
    }
  }

  result.push(Number(group)); 
  let team = result.map(a=>{
      let ch = a.toString()
      return ch.length ===1? `${ch.length}${ch}`:`${ch.length}${ch[0]}`
  }).join('')
  return parseInt(team)
    }
  
}