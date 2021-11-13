const centuris = (year) =>{

    let centuris = Math.floor(year/100)
    if(year% 100 === 0){
        return centuris;
    }
  
    else {
        return centuris+1;
    }
};

console.log(centuris(2000));
console.log(centuris(1705));
console.log(centuris(1601));
console.log(centuris(1900));

