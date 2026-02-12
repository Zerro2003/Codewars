export function removeChar(str: string): string {
  if(str.length<= 2){
    return ""
  }else{
    let myArr: string[]= str.split('')
    return myArr.slice(1,myArr.length-1).join('')
  }
}