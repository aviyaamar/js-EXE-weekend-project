
const countingDuplicat = (str)=>{
    let obj = {}
    str = str.toLowerCase();
    for(let i=0;i<str.length;i++){
            if(str[i] in obj === false){
                obj[str[i]] = 1
            }else{
                obj[str[i]] += 1
            }
            
        }
    return obj   
}
console.log(countingDuplicat('aabbbccccDd'));
console.log(countingDuplicat('abcd'));
console.log(countingDuplicat('AAAbbckllsd'));