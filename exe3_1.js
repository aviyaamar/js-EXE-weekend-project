
const HowMuchYear =(startYear, percent, newResidants, year)=>{
    let numOfYear = 0;
    percent = percent/100;

    while(startYear< year){
        startYear =  startYear + startYear*percent + newResidants;
        numOfYear++;
    }
    return numOfYear;
};
console.log(HowMuchYear(1000, 2, 50,1200 ));