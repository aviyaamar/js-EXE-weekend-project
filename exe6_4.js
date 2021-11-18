const isogram = (str)=>{
    let obj = {}
    str = str.toLowerCase();
    for(let i=0;i<str.length;i++){
            if(str[i] in obj === false){
                obj[str[i]] = 1
            }else{
                obj[str[i]] += 1
            }
            
        }
        for(let idx  in obj){
            if(obj[idx]> 1){
                return false
            }
            else{
                return true;
            }
        } 
}
console.log(isogram("Dermatoglyphics"));
console.log(isogram("aba"));
console.log(isogram("moOse"));