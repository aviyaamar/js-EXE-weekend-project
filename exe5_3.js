const CamelCase = (str) =>{

    Str = str.split('-');
    if(Str.length === 1){
    Str = str.split('_');
    }
    for(let i = 0;i <Str.length;i++){
        let word = Str[i].split('');
        word[0]  = word[0].toUpperCase();
        word = word.join('');
        Str[i] = word;
    }
    Str = Str.join('')
    return Str 
}

console.log(CamelCase("The-Stealth-Warrior"));
let str="The-Stealth-Warrior";
console.log(str.split('-'));
console.log(str.split('_'));
console.log(str.split(''));