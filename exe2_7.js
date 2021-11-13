const fourBasic = (sign, value1, value2)=>{

    switch (sign){
        case '+':
            return value2  + value2;
        
        case '-':
            return value1 - value2;

        case '*':
            return value1 * value2;
        
        case '/':
            value1 / value2;
    }

};

console.log(fourBasic('*', 4,7));
console.log(fourBasic('-', 4,7));
console.log(fourBasic('+', 4,7));
console.log(fourBasic('/', 4,7));